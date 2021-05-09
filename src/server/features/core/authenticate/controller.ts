//

/** main authentication routes */

import express, { NextFunction, Request, Response, Express } from "express";
//middleware
import {
	validateRequestBody,
	validateRequestFile,
	schema,
} from "../../../utilities/validate/middleware";
//services
import {
	removeFileAsync,
	saveFileAsync,
} from "../../../utilities/file-system/service";
import { DOMAIN_URL, AUTH_TOKEN_NAME } from "../../../config";
import {
	compareHashedPassword,
	hashPassword,
} from "../../../utilities/hash/service";
import { UserModel } from "../../../database/models";
import { signJWT, verifyJWT } from "../../../utilities/jwt/service";
import { consoleClient } from "../../../utilities/email/sendmail/service";

//------------------------------------------

const AuthenticationController = express.Router();

/**
 * LOGIN WITH CREDENTIALS (EMAIL & PASSWORD)
 */
AuthenticationController.post(
	"/login",
	validateRequestBody(
		schema
			.object({
				email: schema.string().email({ ignoreLength: true }).required(),
				password: schema.string().min(8).required(),
			})
			.required()
	),
	async (req: Request, res: Response) => {
		//extract data
		const validated = req.body;

		//find user
		let registeredUser = null;
		try {
			registeredUser = await UserModel.findOne({ email: validated.email });
			!registeredUser && res.sendStatus(401);
		} catch (error) {
			res.status(500).send(error.stack);
		}

		//compare passwords
		let isPasswordMatch: boolean = false;
		try {
			isPasswordMatch = await compareHashedPassword(
				validated.password,
				registeredUser.password
			);
			!isPasswordMatch && res.sendStatus(401);
		} catch (error) {
			res.status(500).send(error.stack);
		}

		//login by signing token with id and returning cookie
		try {
			registeredUser.set("password", undefined);
			const payload = { user: registeredUser };
			const jwt_auth_token = signJWT(payload);

			res
				.cookie(AUTH_TOKEN_NAME, jwt_auth_token, {
					httpOnly: true,
					// secure: true, ??
				})
				.send("authenticated");
		} catch (error) {
			res.status(500).send(error.stack);
		}
	}
);

/**
 * REGISTER THEN LOGIN AUTOMATICALLY
 */
AuthenticationController.post(
	"/register",
	validateRequestFile(
		"avatar",
		schema
			.object({
				size: schema.number().min(1),
				mimetype: schema.string(),
			})
			.required()
	),
	validateRequestBody(
		schema
			.object({
				email: schema.string().email({ ignoreLength: true }).required(),
				password: schema.string().min(8).required(),
				name: schema.string().required(),
			})
			.required()
	),
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			//extract data
			const validated = req.body;

			//hash password
			validated.hashed_password = await hashPassword(validated.password);

			//create new user
			const newUser = new UserModel();
			newUser.set({
				name: validated.name,
				email: validated.email,
				password: validated.hashed_password,
			});

			//store image and set avatar path on new user
			const newFile = req.files[0];
			const newFileData = newFile.buffer;
			const newFolderName = `users/id_${newUser.id}`;
			const newFilePath = `${newFolderName}/${
				newFile.fieldname
			}-${Date.now()}-${newFile.originalname}`;

			validated.avatar_path = await saveFileAsync(newFilePath, newFileData);
			newUser.set("avatar_path", validated.avatar_path);

			//persist user
			await newUser.save();

			//login (return auth_token/cookie)
			newUser.set("password", undefined);
			const payload = { user: newUser.toJSON() };
			const jwt_id_token = signJWT(payload);

			res
				.cookie(AUTH_TOKEN_NAME, jwt_id_token, {
					httpOnly: true,
					secure: false, // needs to be used by axios
				})
				.send("registered");
		} catch (error) {
			next(error);
		}
	}
);

/**
 * LOGOUT (REMOVE AUTH COOKIE)
 */

AuthenticationController.post(
	"/logout",
	async (req: Request, res: Response, next: NextFunction) => {
		res.clearCookie(AUTH_TOKEN_NAME).send("logged out");
	}
);

/**
 * FORGOT PASSWORD
 */

AuthenticationController.post(
	"/forgot-password",
	validateRequestBody(
		schema
			.object({
				email: schema.string().email({ ignoreLength: true }).required(),
			})
			.required()
	),
	async (req: Request, res: Response, next: NextFunction) => {
		//extract params
		const validated: { email: string } = req.body;

		//check email is valid and retrieve user
		const userFound: any = await UserModel.findOne({ email: validated.email });

		if (userFound) {
			const user_name = userFound.name;
			const user_email = userFound.email;
			const user_id = userFound.id;

			//create reset url and reset token
			const reset_token = signJWT({ user_id, user_email });
			const reset_url = `${DOMAIN_URL}/auth/verify-forgot-password/${reset_token}`;

			//send email
			consoleClient.sendMail(
				{
					from: `noreply@${DOMAIN_URL}`,
					to: user_email,
					subject: `Password reset for ${DOMAIN_URL}`,
					html: `
					<p>
					Hi ${user_name},
					<br>
					<br>
					You have requested to reset your password for this email
					<br>
					<br>
					If this is not you please ignore this email.
					<br>
					<br>
					Otherwise click on the button below to update your password.
					</p>
					<br>
					<br>
					<a href="${reset_url}">Click Here to Reset Password</a>
				`,
				},
				(err, info) => {
					err ? console.log(err) : console.log(info);
				}
			);

			//respond ambiguously
			res.status(200).send("An email has been send if the credentials existed");
		}
	}
);

/**
 * VERIFY-FORGOT-PASSWROD
 */

AuthenticationController.get(
	"/verify-forgot-password/:reset_token",
	async (req: Request, res: Response) => {
		//extract token
		const reset_token = req.params.reset_token;

		//verify reset token
		const payloadFound: { userId: string; userEmail: string } = verifyJWT(
			reset_token
		);

		//if token valid
		if (payloadFound) {
			const reset_email = payloadFound.userEmail;
			res
				.cookie("reset_token", reset_token, {
					httpOnly: true,
					secure: true,
				})
				.cookie("reset_email", reset_email)
				.redirect("/reset-password");
		} else {
			res.status(401).redirect("/login");
		}
	}
);

/**
 * RESET PASSWORD (WITH RESET TOKEN)
 */

AuthenticationController.post(
	"/reset-password-with-reset-token",
	validateRequestBody(
		schema
			.object({
				password: schema.string().min(8).required(),
			})
			.required()
	),
	async (req: Request, res: Response, next: NextFunction) => {
		//extract reset token from cookie and validated password from body
		const reset_token = req.cookies.reset_token;
		const newPassword = req.body.password;

		if (!reset_token) {
			res.status(401).redirect("/login");
		}

		//verify reset token and get user record
		const { userId, userEmail } = verifyJWT(reset_token);

		//find and update user password
		const userUpdated = await UserModel.findOneAndUpdate(
			{ _id: userId },
			{ password: newPassword }
		);

		if (!userUpdated) {
			res.status(500).redirect("/register");
		}

		//send email to notify user of password update
		consoleClient.sendMail(
			{
				from: `noreply@${DOMAIN_URL}`,
				to: userUpdated.get("email"),
				subject: `Password Updated!`,
				html: `
			<p>
			Hi ${userUpdated.get("name")},
			<br>
			<br>
			You're password has been updated!
			<br>
			<br>
			if this wasn't you, please contact us.
			</p>
			`,
			},
			(err, info) => {
				err ? console.log(err) : console.log(info);
			}
		);

		//login by signing token with id and returning cookie
		try {
			userUpdated.set("password", undefined);
			const payload = { user: userUpdated };
			const jwt_id_token = signJWT(payload);

			res
				// .clearCookie("reset_token")
				// .clearCookie("reset_email")
				.cookie(AUTH_TOKEN_NAME, jwt_id_token, {
					httpOnly: true,
					// secure: true, ??
				})
				.send("password successfully reset, you are now logged in");
		} catch (error) {
			res.status(500).send(error.stack);
		}
	}
);

/**
 * GET AUTH USER DETAILS
 */
AuthenticationController.get("/user", (req: Request | any, res: Response) => {
	//
	if (!req.user) {
		res.sendStatus(401);
	}
	const auth_user_details = {
		name: req.user.name,
		avatar: req.user.avatar_path,
	};

	res.json(auth_user_details);
});

//
export default AuthenticationController;

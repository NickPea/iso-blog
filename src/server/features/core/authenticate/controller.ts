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
import { JWT_ID_TOKEN_NAME } from "../../../config";
import {
	compareHashedPassword,
	hashPassword,
} from "../../../utilities/hash/service";
import { UserModel } from "../../../database/models/user";
import { signJWT } from "../../../utilities/jwt/service";

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
			!registeredUser && res.status(401).send("user not found");
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
			!isPasswordMatch && res.status(401).send("wrong password");
		} catch (error) {
			res.status(500).send(error.stack);
		}

		//login by signing token with id and returning cookie
		try {
			const payload = { id: registeredUser.id };
			const jwt_id_token = signJWT(payload);

			res
				.cookie(JWT_ID_TOKEN_NAME, jwt_id_token, {
					httpOnly: true,
					secure: false, // needs to be used by axios
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
		//extract data
		const validated = req.body;

		//hash password
		try {
			validated.hashedPassword = await hashPassword(validated.password);
		} catch (error) {
			res.status(500).send(error.stack);
		}

		//create new user instance
		const newUser = new UserModel();
		newUser.set({
			name: validated.name,
			email: validated.email,
			password: validated.hashedPassword,
		});

		//store image and attach to user
		const newFile = req.files[0];
		const newFileData = newFile.buffer;
		const newFolderName = `users/id_${newUser.id}`;
		const newFilePath = `${newFolderName}/${newFile.fieldname}-${Date.now()}-${
			newFile.originalname
		}`;
		try {
			await saveFileAsync(newFilePath, newFileData);
			newUser.set({ avatar: newFilePath });
		} catch (error) {
			await removeFileAsync(newFilePath);
			res.status(500).send(error.stack);
		}

		//persist user
		let registeredUser = null;
		try {
			registeredUser = await newUser.save();
		} catch (error) {
			res.status(500).send(error.stack);
		}

		//login by signing token with id and returning cookie
		try {
			const payload = { id: registeredUser.id };
			const jwt_id_token = signJWT(payload);

			res
				.cookie(JWT_ID_TOKEN_NAME, jwt_id_token, {
					httpOnly: true,
					secure: false, // needs to be used by axios
				})
				.send("registered");
		} catch (error) {
			res.status(500).send(error.stack);
		}
	}
);

/**
 * LOGOUT (REMOVE AUTH COOKIE)
 */

AuthenticationController.post(
	"/logout",
	async (req: Request, res: Response, next: NextFunction) => {
		res.clearCookie(JWT_ID_TOKEN_NAME).send();
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
		//extract
		const validated: { email: string } = req.body;
		//check email is valid and retrieve user

		//if valid user,
		// create temp reset jwt token ( email, user.id, expiry)
		// send email with reset token in link

		res.status(200).send();
	}
);

/**
 * VERIFY-FORGOT-PASSWROD
 */

AuthenticationController.post(
	"/verify-forgot-password/:reset_token",
	async (req: Request, res: Response, next: NextFunction) => {
		//extract token
		const params = req.params;
		//verify reset token

		//if token valid
		//attached reset token to cookie (http-only, secure)
		//redirect to reset-password-with-reset-token-page

		//if token invalid
		//respond 401
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
		//extract reset token from cookie
		//extract new password
		//verify reset token
		//if token valid
		//update user table
		//send password update email
		//login by signing token with id and returning cookie
		//if token invalid
		//respond 401
	}
);

//
export default AuthenticationController;

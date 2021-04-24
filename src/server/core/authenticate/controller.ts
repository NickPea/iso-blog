//

/** main authentication routes */

import express, { NextFunction, Request, Response } from "express";
//middleware
import {
	validateRequestBody,
	validateRequestFile,
	schema,
} from "../validate/middleware";
//services
import { removeFileAsync, saveFileAsync } from "../file-system/service";
import { JWT_ID_TOKEN_NAME } from "../../config";
import { compareHashedPassword, hashPassword } from "../hash/service";
import { UserModel } from "../../database/models/user";
import { signJWT } from "../jwt/service";

//------------------------------------------

const AuthenticationController = express.Router();

/**
 * LOGIN
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
 * Register
 */
AuthenticationController.post(
	"/register",
	validateRequestFile(
		"avatar",
		schema
			.object({
				size: schema.number().min(1),
				mimetype: schema.string().allow("image/png", "image/balh").only(),
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

AuthenticationController.post(
	"/test",
	(req: Request, res: Response, next: NextFunction) => {
		res.send(req.files);
	}
);

const prefix = express.Router();
export default prefix.use("/auth", AuthenticationController);

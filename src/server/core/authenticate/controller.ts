//

/** main authentication routes */

import express, { Request, RequestHandler, Response } from "express";
//middleware
import trimStrings from "../sanitization/trim-strings";
import validate from "../validate/middleware";
import loginSchema from "../validate/schema/login";
//services
import AuthService from "./authService";

const AuthenticationController = express.Router();

//middleware
AuthenticationController.use([trimStrings()]);

//routes
AuthenticationController.post(
	"/login",
	[validate(loginSchema)],
	async (req: Request, res: Response) => {
		//
		const validated = req.body;
		//
		const user = await AuthService.verifyUserCredentials(
			validated.email,
			validated.password
		);
		//
		if (user) {
			//put user id in token
			res.json(user)

			//return token in cookie
		} else {
			res.status(401).send('bloody monkey nuts');
		}
	}
);

const prefix = express.Router();
export default prefix.use("/auth", AuthenticationController);

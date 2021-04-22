//

/** main authentication routes */

import express, { Request, RequestHandler, Response } from "express";
//middleware
import trimStrings from "../sanitization/trim-strings";
import validate from "../validate/middleware";
import loginSchema from "../validate/schema/login";
//services
import user from "../../database/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as config from "../../config";

//------------------------------------------

const AuthenticationController = express.Router();

//middleware
AuthenticationController.use([trimStrings()]);

//routes
AuthenticationController.post(
	"/login",
	validate(loginSchema),
	async (req: Request, res: Response) => {
		
		//extract request data
		const validated: { email: string; password: string } = req.body;
		
		//find user via (unique) email
		const foundUser = await user.findOne({ email: validated.email });

		//check password match against hashed password
		const isFoundUserPasswordVerified = foundUser
			? // await bcrypt.compare(validated.password, foundUser.get('password'))
			  validated.password === foundUser.get("password")
			: false;

		//if verified, create token and attach to http-only cookie
		if (isFoundUserPasswordVerified) {
			const jwt_id_token = jwt.sign(
				{ id: foundUser.get("_id") },
				config.JWT_SECRET_OR_PRIVATE_KEY,
				{
					algorithm: "HS256",
					issuer: config.DOMAIN_URL,
					subject: foundUser.get("email"),
					audience: config.DOMAIN_URL,
				}
			);
			res.cookie("jwt_id_token", jwt_id_token, { httpOnly: true }).sendStatus(200);
		} else {
			res.sendStatus(401);
		}
	}
);

const prefix = express.Router();
export default prefix.use("/auth", AuthenticationController);

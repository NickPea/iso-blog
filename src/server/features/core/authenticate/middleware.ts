//

import { NextFunction, Request, Response } from "express";
import { AUTH_TOKEN_NAME } from "../../../config";
import { verifyJWT } from "../../../utilities/jwt/service";

// export default () => {
// 	return async (req: Request, res: Response, next: NextFunction) => {

// 	};
// };

export default () => {
	return (req: Request | any, res: Response, next: NextFunction) => {
		//extract auth token from cookie
		const jwt_auth_token = req.cookies[AUTH_TOKEN_NAME];

		if (jwt_auth_token) {
			//verify token and extarct user
			const payload = verifyJWT(jwt_auth_token);
			//assign user to request
			req.user = payload.user;
		}
		next();
	};
};

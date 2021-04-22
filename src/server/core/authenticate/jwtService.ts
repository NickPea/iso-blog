//

import jwt from "jsonwebtoken";
import * as config from "../../config";

export class JwtService {
	//

	static createJwtToken(payload: any, subject?: string) {
		return jwt.sign(payload, config.JWT_SECRET_OR_PRIVATE_KEY, {
			algorithm: "HS256",
			issuer: config.DOMAIN_URL,
            subject: subject,
            audience: config.DOMAIN_URL
		});
         
	}

    static verifyJwtToken() { }
}

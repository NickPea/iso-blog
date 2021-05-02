//

/**
 * JWT handling functions
 */

import jwt from "jsonwebtoken";
import { JWT_SECRET_OR_PRIVATE_KEY } from "../../config";

/**
 * Creates a jwt token using your JWT_SECRET_OR_PRIVATE_KEY in your config
 * @param payload data to be attached to token
 * @returns jwt token string
 */
export function signJWT(payload: any): string {
	return jwt.sign(payload, JWT_SECRET_OR_PRIVATE_KEY);
}

/**
 * Reads a jwt token using your JWT_SECRET_OR_PRIVATE_KEY in your config
 * @param token
 * @returns the orginal payload of the signed token
 */
export function verifyJWT(token: string): any {
	return jwt.verify(token, JWT_SECRET_OR_PRIVATE_KEY);
}

//

import path from "path";
import crypto from "crypto";

export default class {
	//

	static checkEmailExists(email: string): boolean {
		const isEmailMatch: boolean = false;
		//check email against user table, and if exists return true
		return isEmailMatch;
	}

	static verifyLoginCredentials(email: string, password): boolean {
		const isLoginCredentialCorrect: boolean = false;
		//find user based on email (or any unique data)
		//hash password and compare against stored hash
		return isLoginCredentialCorrect;
	}

	static createRecoveryToken(): string {
		return crypto.randomBytes(20).toString();
	}

	static createRecoveryURL(
		websiteUrl: string,
		recoveryPath: string,
		token: string
	) {
		const recoveryUrl = path.join(websiteUrl, recoveryPath, token);
		return recoveryUrl;
	}

	static storeReoveryToken(recoveryToken: string, email: string): boolean {
		const isTokenStored: boolean = false;
		//store token in database using filtered by email
		return isTokenStored;
	}

	static verifyRecoveryToken(
		recoveryToken: string,
	) {}
}

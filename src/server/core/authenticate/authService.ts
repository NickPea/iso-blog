//

import path from "path";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import UserRespository from "../../database/respositories/user";

export default class {
	//

	static register(
		email: string,
		password: string,
		passwordRepeat: string,
		avatar: Blob,
		name: string
	) {
		//validate
		//email already exists || passwords dont match || etc etc
		//store image and return unique path
		//create user (with optional image table relationships ie. 1-1, 1-many or polymorphic)
	}
	/**
	 *
	 * @param email
	 * @param password
	 * @returns a user record object || null
	 */
	static async verifyUserCredentials(email: string, password: string) {
		//variables
		let userRecord: any = null;
		let isPasswordMatched: boolean = false;

		// find record
		userRecord = await UserRespository.findOneUser({ email });

		//check password matches
		if (userRecord) {
			isPasswordMatched = await bcrypt.compare(password, userRecord.password);
		}

		// if both true, then return the record
		if (userRecord && isPasswordMatched) {
			return userRecord;
		} else {
			return null;
		}
	} //

	static logout(userId: string) {
		// do nothing (remove jwt on client), expire cookie, remove return auth header
	}

	static recoverPassword(email: string) {
		//check email belongs to user
		//if not...log & ignore?
		//if email valid,
		//create recover-token and append to recovery url (i.e 'recover-password-verify/23r0sdnslkfj')
		//send email with recovery url link
	}
	static recoverPasswordVerifyToken(token: string) {
		//recieve recover-token from email link
		//check users table for recover-token match
		//if no match...log & ignore?
		//if matched, redirect to reset password
		//
	}
	static resetPassword(
		userId: string,
		oldPassword: string,
		newPassword: string
	) {
		//find user
		//verify old password
		//replace with new
		//remove recover-token
	}

	static checkEmailExists(email: string): boolean {
		const isEmailMatch: boolean = false;
		//check email against user table, and if exists return true
		return isEmailMatch;
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

	static verifyRecoveryToken(recoveryToken: string) {}
}

//

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
	static login(email: string, password: string) {
		//verify user credentials
		//return jwt with user payload
	}
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
}

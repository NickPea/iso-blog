//

/**
 * GMAIL CLIENT OBJECTS WITH SPECIFIED ACCOUNTS
 */

import nodemailer from "nodemailer";
import {
	GMAIL_ACCOUNT_1_PASSWORD,
	GMAIL_ACCOUNT_1_USERNAME,
	GMAIL_ACCOUNT_2_PASSWORD,
	GMAIL_ACCOUNT_2_USERNAME,
} from "../../../config";

export const gmailAccount1 = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: GMAIL_ACCOUNT_1_USERNAME,
		pass: GMAIL_ACCOUNT_1_PASSWORD,
	},
});

export const gmailAccount2 = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: GMAIL_ACCOUNT_2_USERNAME,
		pass: GMAIL_ACCOUNT_2_PASSWORD,
	},
});

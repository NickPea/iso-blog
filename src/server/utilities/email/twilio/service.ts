//

import nodemailer, { SendMailOptions } from "nodemailer";
import { TWILIO_SENDGRID_SMTP_APIKEY } from "../../../config";

export const sendgridClient = nodemailer.createTransport({
	host: "smtp.sendgrid.net",
	port: 465,
	secure: true,
	auth: {
		user: "apikey",
		pass: TWILIO_SENDGRID_SMTP_APIKEY,
	},
});

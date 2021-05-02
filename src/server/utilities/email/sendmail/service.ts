//

/** SEND MAIL CLIENT
 * (sends email using linux's 'sendmail' cli command like php's mail() function)
 */

import nodemailer from "nodemailer";

export const consoleClient = nodemailer.createTransport({
	sendmail: true,
	// path: "/usr/sbin/sendmail",
	newline: "unix",
	args: [],
});

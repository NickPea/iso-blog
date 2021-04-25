//

import express, { Request, Response, NextFunction } from "express";
const testController = express.Router();
//utilities
import { sendgridClient } from "../../../utilities/email/twilio/service";
import {gmailAccount1} from '../../../utilities/email/google/service';
import {sendMailCommand} from '../../../utilities/email/sendmail/service';

testController.post(
	"/send-email/:text",
	async (req: Request, res: Response, next: NextFunction) => {
		//

		try {
			const emailResponse = await sendMailCommand.sendMail({
				from: 'sally@monkeyland.com',
				to: "nickp2287@gmail.com",
				subject: `${req.params.text}`,
				text: "test",
			});
			res.send(emailResponse);
		} catch (error) {
			res.send(error);
		}

	}
);

export default testController;

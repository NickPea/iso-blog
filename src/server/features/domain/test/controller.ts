//

import express, { Request, Response, NextFunction } from "express";
const testController = express.Router();
//utilities
import { consoleClient } from "../../../utilities/email/sendmail/service";

testController.post(
	"/send-email/subject/:subject/text/:text",
	async (req: Request, res: Response, next: NextFunction) => {
		//

		try {
			const emailResponse = await consoleClient.sendMail({
				from: "nickp2287@gmail.com",
				to: "nickp2287@gmail.com",
				subject: `${req.params.subject}`,
				text: `${req.params.text}`,
			});
			//
			res.send(emailResponse);
		} catch (error) {
			res.send(error);
		}
	}
);

testController.get("/getuser", (req: Request | any, res: Response) => {
	res.send(req.user);
});

export default testController;

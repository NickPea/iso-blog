//

import { NextFunction, Request, Response } from "express";
import AppService from "./app-service";

export default class {
	//

	static async getApp(req: Request, res: Response, next: NextFunction) {
		//

		try {
			//

			const requestPath = req.path;

			const htmlIsoAppResponse = await AppService.renderAppToHtml(requestPath);

			res.send(htmlIsoAppResponse);

			//
		} catch (error) {
			//

			next(error);
		}
	}
}

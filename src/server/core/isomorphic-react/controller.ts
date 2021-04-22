//

import express from "express";
import AppService from "./service";

const IsomorphicReactController = express.Router();

//routes
IsomorphicReactController.use(async (req, res, next) => {
	try {
		const requestPath = req.path;
		const htmlIsoAppResponse = await AppService.renderAppToHtml(requestPath);
		res.send(htmlIsoAppResponse);
	} catch (error) {
		next(error);
	}
});

export default IsomorphicReactController;

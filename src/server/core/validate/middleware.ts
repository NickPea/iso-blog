//

/**
 *
 */

import joi from "joi";
import { NextFunction, Request, Response } from "express";

export default (schema: joi.AnySchema) => {
	return (req: Request, res: Response, next: NextFunction) => {
		//
		const requestBody = req.body;
		const { error } = schema.validate(req.body);
		if (error) {
			res.status(422).json(error);
		} else {
			next();
		}
	};
};

//

/**
 * Validation middleware for body and file data
 */

import joi from "joi";
import { NextFunction, Request, Response } from "express";

/**
 * Schema builder
 */
export const schema = joi;

/**
 * Validate body data
 * @param schema
 * @returns passes to next middleware/route if valid otherwiser responds with 422 status and error details
 */
export const validateRequestBody = (schema: joi.AnySchema) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		//extract
		const requestBody = req.body;
		//validate
		try {
			await schema.validateAsync(requestBody, {
				abortEarly: false,
			});
			//valid
			next();
		} catch (error) {
			res.status(422).json(error.details);
		}
	};
};

/**
 * Validate file data
 * @param field_name name of html file input elements 'name' attribute
 * @param schema joi schema that tests against any Multer.File property (fieldname, originalname, encoding, mimetype, size, destination, filename, path, buffer)
 * @returns passes to next middleware/route if valid otherwiser responds with 422 status and error details if fieldname not present of schema invalid
 */
export const validateRequestFile = (
	field_name: string,
	schema: joi.AnySchema
) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		//extract
		const files: Express.Multer.File[] | any = req.files;

		//check for any files
		if (!files.length) {
			res.status(422).send("no files uploaded");
			return;
		}

		//check for presence of fieldname
		const filesToValidate = files.filter(
			(file) => file.fieldname === field_name
		);
		if (!filesToValidate.length) {
			res.status(422).send(`no files uploaded with fieldname:'${field_name}'`);
			return;
		}

		//validate
		try {
			await Promise.all(
				filesToValidate.map((file) => {
					return schema.validateAsync(file, {
						allowUnknown: true,
					});
				})
			);
			//valid
			next();
		} catch (error) {
			res.status(422).json(error.details);
		}
	};
};

//


/**
 * NOT TESTED YET
 */

import { NextFunction, Request, Response } from "express";
import { trim } from "lodash";

export default () => {
	return (req: Request, res: Response, next: NextFunction) => {
		for (const key in req.body) {
			if (Object.prototype.hasOwnProperty.call(req.body, key)) {
				req.body[key] = trim(req.body[key]);
			} //if
		} //for

		next();
	};
};

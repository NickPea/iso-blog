//

import joi from "joi";

export default joi
	.object({
		email: joi.string().email({ ignoreLength: true }).required(),
		password: joi.string().min(8).required(),
	})
	.required();

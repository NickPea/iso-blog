//

import userModel from "../models/user";

export default class {
	//

	static findOneUser(queryObject) {
		return userModel.findOne(queryObject);
	}
}

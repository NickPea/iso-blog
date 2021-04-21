//

import { RouterOptions } from "express";
import ApiService from "./api-service";

export default class {
	//

	static async getExampleData(req, res, next) {

		const fakeData = await ApiService.generateFakeData();
        
		res.send(fakeData);
	}
}

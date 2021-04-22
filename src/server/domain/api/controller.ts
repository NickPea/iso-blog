//

//

import express from "express";
import ApiService from "./service";

const ApiController = express.Router();

//routes
ApiController.get("/get-example-data", async (req, res) => {
	const fakeData = await ApiService.generateFakeData();
	res.send(fakeData);
});

export default ApiController;

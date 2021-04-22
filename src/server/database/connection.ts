//

import mongoose from "mongoose";
import * as config from "../config";

mongoose.connect(config.MONGO_DB_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.addListener("open", () => {
	console.log(`-- Mongoose Connected on URI: '${config.MONGO_DB_CONNECTION_STRING}' --`);
});


//

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email: String,
	password: String,
	name: String,
	avatar: String,
	//blogs
});

export default mongoose.model("user", userSchema);

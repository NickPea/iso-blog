//

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	avatar: String,
	//blogs
});

export const UserModel = mongoose.model("user", userSchema);

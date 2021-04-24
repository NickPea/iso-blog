//

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
	title: String,
	date: Date,
	imagePath: String,
	body: String,
});

export const PostModel = mongoose.model("post", postSchema);

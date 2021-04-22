//

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
	title: String,
	date: Date,
	imagePath: String,
	body: String,
});

export default mongoose.model("Post", postSchema);

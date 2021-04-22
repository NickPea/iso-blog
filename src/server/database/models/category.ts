//

import mongoose from "mongoose";
import post from "./post";

const categorySchema = new mongoose.Schema({
	name: String,
	posts: {
		type: post,
	},
});

export default mongoose.model("Category", categorySchema);

//

import mongoose from "mongoose";
import { PostModel } from "./post";

const categorySchema = new mongoose.Schema({
	name: String,
	// posts: {
	// 	type: PostModel,
	// },
});

export const CategoryModel = mongoose.model("category", categorySchema);

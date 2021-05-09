//

import mongoose, { Document, Model } from "mongoose";

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	avatar_path: String,
	articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
});

const articleSchema = new mongoose.Schema({
	title: String,
	image_path: String,
	html: String,
	category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const categorySchema = new mongoose.Schema({
	label: String,
	articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
});

//

export const UserModel = mongoose.model("User", userSchema);
export const ArticleModel = mongoose.model("Article", articleSchema);
export const CategoryModel = mongoose.model("Category", categorySchema);

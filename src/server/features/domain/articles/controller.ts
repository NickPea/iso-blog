//

//

import express, { NextFunction, Request, Response } from "express";
import { ArticleModel, CategoryModel } from "../../../database/models";
import {
	schema,
	validateRequestBody,
	validateRequestFile,
} from "../../../utilities/validate/middleware";
import {
	saveFileAsync,
	removeFileAsync,
} from "../../../utilities/file-system/service";

const ArticlesController = express.Router();

/**
 * create new article
 */
ArticlesController.post(
	"",
	validateRequestBody(
		schema
			.object({
				article_title: schema.string().required(),
				article_html: schema.string().required(),
				article_category_name: schema.string().required(),
			})
			.required()
	),
	validateRequestFile("article_image", schema.object({})),
	async (req: Request | any, res: Response, next: NextFunction) => {
		try {
			//authenticate
			if (!req.user) {
				res.sendStatus(401);
			}
			const auth_user = req.user;

			//extract, store image and retun image path
			const newFile = req.files[0];
			const newFileData = newFile.buffer;

			const userFolder = `users/id_${auth_user._id}`;
			const newFilePath = `${userFolder}/${newFile.fieldname}-${Date.now()}-${
				newFile.originalname
			}`;
			const article_image_path = await saveFileAsync(newFilePath, newFileData);

			//extract request data
			const {
				article_title,
				article_html,
				article_category_name,
			}: {
				article_title: string;
				article_html: string;
				article_category_name: string;
			} = req.body;

			//find or create new category, then extract categoryId
			const articleCategoryNameLowerCase = article_category_name.toLowerCase();
			let newArticleCategory = await CategoryModel.findOne({
				label: articleCategoryNameLowerCase,
			});
			if (!newArticleCategory) {
				const newCategory = new CategoryModel();
				newCategory.set("label", articleCategoryNameLowerCase);
				newCategory.set("articles", []);
				newArticleCategory = await newCategory.save();
			}
			const article_categoryId = newArticleCategory._id;

			//create/insert new article with articleId and userId
			const newArticle = new ArticleModel();
			newArticle.set("title", article_title);
			newArticle.set("image_path", article_image_path);
			newArticle.set("html", article_html);
			newArticle.set("category", article_categoryId);
			newArticle.set("user");
			newArticle.save();

			res.status(201).send(newArticle.toJSON());
			//
		} catch (error) {
			next(error);
		}
	}
);

export default ArticlesController;

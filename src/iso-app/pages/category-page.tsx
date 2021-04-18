//

import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { match, useParams } from "react-router";
//components
import PageWrapper from "../components/utilities/PageWrapper";
import Article from "../components/singles/Article";
import { createUseStyles } from "react-jss";

//styles
const useStyles = createUseStyles({
	notFound: {
		fontWeight: "normal",
	},
});

const ArticlePage = () => {
	//

	/**
	 *  client-side route-match and load data
	 */

	const params: { categoryslug: string } = useParams();
	const [fetchedArticlesForCategory, setFetchedArticlesForCategory] = useState({
		count: 0,
		items: [],
	});
	useEffect(() => {
		axios
			.get(`api/category/${params.categoryslug}`)
			.then((res) => res.data)
			.then((data) => {
				setFetchedArticlesForCategory(data);
			})
			.catch((err) => {
				console.error(err);
			});
	});

	/**
	 * render
	 */

	//classes
	const classes = useStyles();

	//computed
	let isArticlesFound = fetchedArticlesForCategory.count > 0;

	return (
		<PageWrapper>
			{!isArticlesFound && (
				<h4>
					No articles found for "
					<i className={classes.notFound}>{params.categoryslug}</i>" category.
				</h4>
			)}
			{isArticlesFound && (
				<Fragment>
					{fetchedArticlesForCategory.items.map((article) => {
						return (
							<div key={article.slug}>
								<Article
									title={article.title}
									publishDate={article.createdAt}
									bodyHtml={article.bodyHtml}
									linkTo={article.slug}
								/>
								<hr />
							</div>
						);
					})}
				</Fragment>
			)}
		</PageWrapper>
	);
};

/**
 *	server-side route match & load data
 */

ArticlePage.getPrefetchFunctions = () => {
	return [async (routeParams: object) => {}];
};

export default ArticlePage;

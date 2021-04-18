//

import React, { useState, useEffect, Fragment } from "react";
import { createUseStyles } from "react-jss";
import { match, useParams } from "react-router";
import axios from "axios";
import isEmpty from "lodash/isEmpty";
//components
import PageWrapper from "../components/utilities/PageWrapper";
import Article from "../components/singles/Article";

//styles
const useStyles = createUseStyles({
	notFound: {
		fontWeight: "normal",
	},
});

const ArticlePage = () => {
	//

	/**
	 *  client-side route-match requested article and fetch data
	 */

	const params: { articleslug: string } = useParams();
	const [fetchedArticle, setFetchedArticle]: any = useState({});
	useEffect(() => {
		axios
			.get(`api/article/${params.articleslug}`)
			.then((res) => res.data)
			.then((data) => {
				// setFetchedArticle(data);
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
	let isArticleFound = !isEmpty(fetchedArticle);
	let desluggedArticleParam = params.articleslug.replace(/-/g, " ");

	return (
		<PageWrapper>
			{!isArticleFound && (
				<h4>
					"
					<i className={classes.notFound}>
						&nbsp;{desluggedArticleParam}&nbsp;
					</i>
					" article not found.
				</h4>
			)}
			{isArticleFound && (
				<Fragment>
					<Article
						title={fetchedArticle.title}
						publishDate={fetchedArticle.createdAt}
						bodyHtml={fetchedArticle.bodyHtml}
						linkTo={fetchedArticle.slug}
					/>
				</Fragment>
			)}
		</PageWrapper>
	);
};

/**
 * server-side route-match request and fetched data
 */

ArticlePage.getPrefetchFunctions = (match: match) => {
	return [async (routeParams: object) => {}];
};

export default ArticlePage;

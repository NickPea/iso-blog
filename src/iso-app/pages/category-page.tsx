//

import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
//components
import PageWrapper from "../components/Utils/PageWrapper";
import Article from "../components/Article";
import { createUseStyles } from "react-jss";

//styles
const useStyles = createUseStyles({
	noArticlesFound: {
		
	}
})

const ArticlePage = () => {
	//


	/**
	 *  client-side route-match and load data
	 */

	const params: { categoryslug: string } = useParams();
	const [fetchedArticles, setfetchedArticles] = useState({ count: 0, items: [] });
	useEffect(() => {
		axios
			.get(`api/category/${params.categoryslug}`)
			.then((res) => res.data)
			.then((data) => {
				// set state with data
			});
	});

	/**
	 * render
	 */

	return (
		<PageWrapper>
			<div>Category Page</div>
			{fetchedArticles.count === 0 && (
				<h4>No articles found for {params.categoryslug}</h4>
			)}
			{fetchedArticles.count > 0 && (
				<Fragment>
					{fetchedArticles.items.map((article) => {
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
	return [];
};

export default ArticlePage;

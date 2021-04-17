//

import React, { Fragment } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
//prefetch
import ApiService from "../../server/serve-api/api-service";
//components
import PageWrapper from "../components/Utils/PageWrapper";
import Article from "../components/Article";

//delete me
import { articles } from "../../../DATA-DELETE";

const HomePage = () => {
	//
	const state = useSelector((state: RootStateOrAny) => state);
	//
	return (
		<PageWrapper>
			{articles.map((article) => {
				return (
					<div key={article.slug}>
						<Article
							
							title={article.title}
							publishDate={article.createdAt}
							bodyHtml={article.bodyHtml}
							linkTo={article.slug}
						/>
						<hr/>
					</div>
				);
			})}
		</PageWrapper>
	);
}; //

/**
 * SSR State Hydrater
 */
HomePage.getPrefetchFunctions = function () {
	return [
		async (params: object) => {
			return await ApiService.generateFakeData();
		},
	];
};

export default HomePage;

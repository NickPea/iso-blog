//

import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
//prefetch
import ApiService from "../../server/serve-api/api-service";
//components
import PagePadding from "../components/Utils/PageWrapper";
import Article from "../components/Article";

//delete me
import mocktailImage from "../../assets/mocktail.jpg";
//

const HomePage = () => {
	//
	const state = useSelector((state: RootStateOrAny) => state);
	//
	return (
		<PagePadding>
			<Article
				title={"a compelling title"}
				imgSrc={mocktailImage}
				imgAlt="food photography of a berry mocktail"
				imgCaption="the new delicious mocktail"
				bodyHtml={"<p>and example paragraph</p>"}
			/>
		</PagePadding>
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

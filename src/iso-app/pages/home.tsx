//

import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
//prefetch
import ApiService from "../../server/serve-api/api-service";
//components
import HeroImage from "../components/HeroImage";
//assets
import imgPath from "../../assets/watermelon-spritz.jpg";
import RouterNavigation from "../routing/RouterNavigation";

//
interface PageElement {
	(): JSX.Element;
	getPrefetchFunctions: () => {};
}

//component
const HomePage: PageElement = () => {
	//
	const state = useSelector((state: RootStateOrAny) => state);

	//reminder: update state for client as well

	return (
		<div>
			<RouterNavigation />
			<div>Home Page</div>
			<div>State: {JSON.stringify(state)}</div>
			<HeroImage imageSrc={imgPath} />
		</div>
	);
};

//SSR prefetch state
HomePage.getPrefetchFunctions = function () {
	return [
		async (params: object) => {
			return await ApiService.generateFakeData();
		},
	];
};

export default HomePage;

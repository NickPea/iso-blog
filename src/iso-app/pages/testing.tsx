//

import React from "react";
//components
import HomeOverview from '../components/HeroOverview';
import RouterNavigation from "../routing/RouterNavigation";

const FeaturePage = () => {
	return (
		<div>
			<RouterNavigation />
			<div>...Testing...</div>
			<br/>
			<HomeOverview />
		</div>
	);
};

FeaturePage.getPrefetchFunctions = () => {
	return [
		(routeParams:object)=>{}
	];
};

export default FeaturePage;

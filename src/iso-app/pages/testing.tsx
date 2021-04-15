//

import React from "react";
import PageWrapper from "../components/Utils/PageWrapper";
//components
import GenericNav from "../routing/GenericNav";

const FeaturePage = () => {
	return (
		<PageWrapper>
			<div>Testing Page</div>
		</PageWrapper>
	);
};

FeaturePage.getPrefetchFunctions = () => {
	return [(routeParams: object) => {}];
};

export default FeaturePage;

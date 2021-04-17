//

import React from "react";
import PageWrapper from "../components/Utils/PageWrapper";

const AboutPage = () => {
	//

	return (
		<PageWrapper>
			<div>Testing Page</div>
		</PageWrapper>
	);
};

AboutPage.getPrefetchFunctions = () => {
	return [(routeParams: object) => {}];
};

export default AboutPage;

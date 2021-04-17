//

import React from "react";
import PageWrapper from "../components/Utils/PageWrapper";


const ContactPage = () => {
	return (
		<PageWrapper>
			<div>Testing Page</div>
		</PageWrapper>
	);
};

ContactPage.getPrefetchFunctions = () => {
	return [(routeParams: object) => {}];
};

export default ContactPage;

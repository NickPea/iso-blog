//

import React from "react";
import { createUseStyles } from "react-jss";
import PageWrapper from "../components/Utils/PageWrapper";
import GenericNav from "../routing/GenericNav";

const useStyles = createUseStyles((theme) => ({}));

const MockPage = () => {
	//

	const jssClasses = useStyles();

	return (
		<PageWrapper>
			<div>Feature Page</div>
		</PageWrapper>
	);
};

MockPage.getPrefetchFunctions = () => {
	return [];
};

export default MockPage;

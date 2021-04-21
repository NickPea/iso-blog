//

import React from "react";
import { createUseStyles } from "react-jss";
import PageTitle from "../../components/singles/PageTitle";
//components
import PageWrapper from "../../components/utilities/PageWrapper";

const useStyles = createUseStyles({});

interface Proptypes {}

const LogoutPage = () => {
	//

	//hooks
	const classes = useStyles();

	return (
		<PageWrapper>
			<PageTitle>Log out.</PageTitle>
			<p>You have successfully logged out.</p>
		</PageWrapper>
	);
};

/**
 * server-side route-match request and fetched data
 */

LogoutPage.getPrefetchFunctions = function () {
	return [async (routeParams: object) => {}];
};

export default LogoutPage;

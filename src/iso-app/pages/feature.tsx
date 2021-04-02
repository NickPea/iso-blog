//

import React from "react";
import { createUseStyles } from "react-jss";
import RouterNavigation from "../routing/RouterNavigation";

const useStyles = createUseStyles((theme) => ({
	monkey: {
		backgroundColor: "blueviolet",
	},
}));

const MockPage = () => {
	//

	const jssClasses = useStyles();

	return (
		<div>
			<RouterNavigation />
			<div>Feature Page</div>
			<div className={jssClasses.monkey}>I'mma stylin Up in 'ere!</div>
		</div>
	);
};

MockPage.getPrefetchFunctions = () => {
	return [];
};

export default MockPage;

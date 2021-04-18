//

import React from "react";
import { createUseStyles } from "react-jss";
import AuthButton from "../../singles/AuthButton";

const useStyles = createUseStyles({
	topNavWrapper: {
		padding: "2%",
		backgroundColor: "var(--primary-color)",

        //position content
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "flex-end",
	},
});

export default () => {
	//

	//classes
	const classes = useStyles();

	return (
		<div className={classes.topNavWrapper}>
			<AuthButton />
		</div>
	);
};

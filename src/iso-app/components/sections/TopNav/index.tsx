//

import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
import AuthButton from "../../singles/AuthButton";

const useStyles = createUseStyles({
	topNavWrapper: {
		padding: "2%",
		backgroundColor: "var(--primary-color)",

		//position content
		display: "flex",
		flexFlow: "row wrap",
		alignItems: "center",
		justifyContent: "flex-end",
	},

	"@media (min-width: 600px)": {
		topNavWrapper: {
			padding: "1%",
		},
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

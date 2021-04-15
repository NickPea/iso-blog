//

import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	footerWrapper: {
		borderTop: "1px solid lightgrey",
		padding: "5%",
		textAlign: "center",
	},
});

export default () => {
	//
	const classes = useStyles();

	return (
		<div className={classes.footerWrapper}>
			<p>
				Copyright: {new Date(Date.now()).getFullYear()} - Programming with Nick
				- Powered by Love.
			</p>
		</div>
	);
};

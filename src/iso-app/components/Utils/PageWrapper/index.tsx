//

import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	pageWrapper: {
		padding: "5%",
	},
});

export default (props) => {
	//
	const classes = useStyles();

	return <div className={classes.pageWrapper}>{props.children}</div>;
};

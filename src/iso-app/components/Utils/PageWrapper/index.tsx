//

import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	page: {
		padding: "3%",
	},
});

export default (props) => {
	//
	const classes = useStyles();

	return <div className={classes.page}>{props.children}</div>;
};

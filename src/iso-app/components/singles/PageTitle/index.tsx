//

import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	pageTitle: {
		marginBottom: "5%",
	},
});

interface Proptypes {
	children: React.ReactNode;
}

export default (props: Proptypes) => {
	//
	const classes = useStyles();
	return <h3 className={classes.pageTitle}>{props.children}</h3>;
};

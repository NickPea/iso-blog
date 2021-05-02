//

import { divide } from "lodash";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	formError: {
		color: "red",
		padding: "10px 0",
		textAlign: (props: Proptypes) => props.textAlign || 'left',
	},
});

interface Proptypes {
	children: React.ReactNode;
	textAlign?: string;
}

export default (props: Proptypes) => {
	//

	//classes
	const classes = useStyles(props);

	return <div className={classes.formError}>{props.children}</div>;
};

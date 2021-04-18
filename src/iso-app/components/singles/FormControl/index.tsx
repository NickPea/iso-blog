//
import { divide } from "lodash";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	formControl: {
		"&": {
			paddingBottom: "10%",
		},
		"& label": {
			display: "block",
			paddingBottom: "1%",
		},
		"& input, & textarea, & button": {
			width: "100%",

			border: "1px solid var(--dull-color)",
			borderRadius: "3px",
			backgroundColor: "inherit",

			fontFamily: "inherit",
			fontSize: "1rem",
			padding: "3%",
		},
	},
});

interface Proptypes {
	children: React.ReactNode;
}

export default (props: Proptypes) => {
	//

	//classes
	const classes = useStyles();

	return <div className={classes.formControl}>{props.children}</div>;
};

//

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
	customFormButton: {
		width: "50% !important",
		marginLeft: "50% !important",

		color: "var(--light-text) !important",
		backgroundColor: "var(--secondary-color) !important",
		border: "none !important",

		cursor: "pointer",

		"&:hover": {
			transform: "translateY(-1px)",
		},
		"&:active": {
			transform: "translateY(1px)",
		},
		"&:focus": {
			outline: "none",
		},
	},
});

interface Proptypes {
	children: React.ReactNode;
	type?: "button" | "submit" | "reset";
}

export default (props: Proptypes) => {
	//

	const classes = useStyles();
	return (
		<div className={classes.formControl}>
			<button
				className={classes.customFormButton}
				type={props.type || "submit"}
			>
				{props.children}
			</button>
		</div>
	);
};

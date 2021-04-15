//

import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
//assets
import imgPath from "../../../assets/headshot.jpeg";
//components
import GenericNav from "../../routing/GenericNav";

const useStyles = createUseStyles({
	rightNavWrapper: {
		padding: '15vh 5vw 0 0',
	},
	title: {
		color: "var(--dull-text)",
		fontWeight: "normal",
		marginBottom: 10,
	},
	list: {
		"& div": {
			padding: "10px 0",
			borderBottom: "1px solid lightgrey",
			cursor: "pointer",
			color: "var(--dull-text)",
			"&:hover": {
				color: "var(--dark-text)",
			},
		},
	},
});

export default () => {
	//
	const classes = useStyles();

	return (
			<div className={classes.rightNavWrapper}>
				<h3 className={classes.title}>Categories</h3>
				<nav className={classes.list}>
					<div>Node</div>
					<div>React</div>
					<div>Javascript</div>
					<div>Css</div>
				</nav>
			</div>
	);
};

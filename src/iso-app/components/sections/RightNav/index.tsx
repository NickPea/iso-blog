//

import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
//delete
import { categories } from "../../../../../DATA-DELETE";

const useStyles = createUseStyles({
	rightNavWrapper: {
		padding: "15% 15% 0 0",
	},
	title: {
		color: "var(--dull-text)",
		fontWeight: "normal",
		marginBottom: 10,
	},
	linkItem: {
		padding: "10px 5px",
		borderBottom: "1px solid lightgrey",
		color: "var(--dull-text)",
		fontWeight: "normal",

		transition: "300ms",
		"&:hover": {
			color: "var(--primary-color)",
			backgroundColor: "var(--light-hover-color)",
			borderRadius: "5px",
		},
	},
	linkReset: {
		color: "inherit",
		textDecoration: "none",
	},
});

export default () => {
	//
	const classes = useStyles();

	return (
		<div className={classes.rightNavWrapper}>
			<h3 className={classes.title}>Categories</h3>
			<nav>
				{categories.map((category) => {
					return (
						<Link
							key={category.label}
							className={classes.linkReset}
							to={category.slug}
						>
							<h4 className={classes.linkItem}>{category.label}</h4>
						</Link>
					);
				})}
			</nav>
		</div>
	);
};

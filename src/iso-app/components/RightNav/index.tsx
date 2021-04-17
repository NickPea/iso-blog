//

import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
//assets
import imgPath from "../../../assets/headshot.jpeg";
//components
import { Link } from "react-router-dom";
//delete
import { categories } from "../../../../DATA-DELETE";

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
		fontWeight: 'normal',

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
						<h4 key={category.label} className={classes.linkItem}>
							<Link className={classes.linkReset} to={category.slug}>
								{category.label}
							</Link>
						</h4>
					);
				})}
			</nav>
		</div>
	);
};

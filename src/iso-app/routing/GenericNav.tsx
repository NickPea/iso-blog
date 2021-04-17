//

import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import routeList from "./routes";

interface Proptypes {
	theme?: any;
	stack?: boolean;
	spacing?: string | number;
	size?: string | number;
	color?: string;
	hoverColor?: string;
}

const useStyles = createUseStyles({
	container: {
		display: "flex",
		flexFlow: (props: Proptypes) =>
			(props.stack ? "column" : "row") + " nowrap",
	},
	item: {
		margin: (props: Proptypes) =>
			props.spacing
				? props.spacing && props.stack
					? `0px 0px ${props.spacing} 0px`
					: `0px ${props.spacing} 0px 0px`
				: "none",
		color: (props: Proptypes) => (props.color ? props.color : "inherit"),
		fontSize: (props: Proptypes) => (props.size ? props.size : "1rem"),
		textDecoration: "none",
		"&:hover": {
			color: (props: Proptypes) =>
				props.hoverColor ? props.hoverColor : "inherit",
		},
		textAlign: "center",
	},
});

export default (props: Proptypes) => {
	//

	const classes = useStyles(props);

	return (
		<nav>
			<div className={classes.container}>
				{routeList.map((route) => {
					if (route.navigatable) {
						return (
							<Link className={classes.item} key={route.path} to={route.path}>
								{route.label}
							</Link>
						);
					}
				})}
			</div>
		</nav>
	);
};

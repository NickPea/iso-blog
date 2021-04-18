//

import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { createUseStyles, DefaultTheme } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
	authButton: {
		padding: "15px",

		color: "var(--light-text)",
		backgroundColor: "var(--secondary-color)",
		borderRadius: "5px",

		cursor: "pointer",
		"&:hover": {
			transform: "translateY(-1px)",
			boxShadow: "1px 1px 5px 0 var(--dull-color)",
		},
	},
	linkReset: {
		color: "inherit",
		textDecoration: "none",
	},
});

interface Proptypes {}

export default (props: Proptypes) => {
	//

	// check storage for authtoken
	const [isAuth, setIsAuth] = useState(false);
	useEffect(() => {
		setIsAuth(localStorage.getItem("auth-jwt") ? true : false);
	});

	//classes
	const classes = useStyles();

	//render
	return (
		<Link className={classes.linkReset} to={isAuth ? "/logout" : "/login"}>
			<div className={classes.authButton}>{isAuth ? "Logout" : "Login"}</div>
		</Link>
	);
};

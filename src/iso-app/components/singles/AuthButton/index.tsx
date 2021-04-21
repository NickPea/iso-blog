//

import React, { Fragment, useEffect, useState } from "react";
import { createUseStyles, DefaultTheme } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
	authButton: {
		margin: "0 5px",
		padding: "15px",

		color: "var(--light-text)",
		backgroundColor: "var(--secondary-color)",
		borderRadius: "5px",

		cursor: "pointer",
		"&:hover": {
			transform: "translateY(-1px)",
		},
		"&:active": {
			transform: "translateY(1px)",
		},
	},
	linkReset: {
		color: "inherit",
		textDecoration: "none",
	},
});

interface Proptypes {}

const AuthButton = (props: Proptypes) => {
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
		<Fragment>
			{isAuth ? (
				<Link className={classes.linkReset} to={"/logout"}>
					<div className={classes.authButton}>Logout</div>
				</Link>
			) : (
				<Fragment>
					<Link className={classes.linkReset} to={"/login"}>
						<div className={classes.authButton}>Login</div>
					</Link>
					<Link className={classes.linkReset} to={"/register"}>
						<div className={classes.authButton}>Register</div>
					</Link>
				</Fragment>
			)}
		</Fragment>
	);
};

export default AuthButton;

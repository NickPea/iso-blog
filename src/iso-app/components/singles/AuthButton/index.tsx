//

import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { createUseStyles, DefaultTheme } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AppSetUser } from "../../../state/actions";

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
	userAvatar: {
		height: 45,
		width: 45,
		objectFit: "cover",
		objectPosition: "center",
		border: "1px solid white",
		borderRadius: "50%",

		cursor: "pointer",

		marginRight: 5,

		"&:hover": {
			transform: "translateY(1px)",
			border: "1px solid var(--dull-text)",
		},
		"&:active": {
			border: "1px solid white",
		},
	},
});

interface Proptypes {}

const AuthButton = (props: Proptypes) => {
	//

	const dispatch = useDispatch();
	const app_auth_user = useSelector((state: any) => state.app.auth.user);
	const history = useHistory();
	const classes = useStyles();

	// set user state on load
	useEffect(() => {
		axios.get("/auth/user").then((res) => {
			if (res.status === 200) {
				dispatch(AppSetUser(res.data));
			}
		});
	}, []);

	//logout and set user state
	const handleLogout = async () => {
		await axios.post("/auth/logout");
		await axios.get("/auth/user").then((res) => dispatch(AppSetUser(res.data)));
		history.push("/logout");
	};

	//render
	return (
		<Fragment>
			{app_auth_user ? (
				<Fragment>
					<Link to={"/dashboard"}>
						<img
							className={classes.userAvatar}
							src={`/${app_auth_user.avatar}`}
							alt={`${app_auth_user.name}'s profile photo`}
							title={app_auth_user.name}
						/>
					</Link>
					<div className={classes.authButton} onClick={handleLogout}>
						Logout
					</div>
				</Fragment>
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

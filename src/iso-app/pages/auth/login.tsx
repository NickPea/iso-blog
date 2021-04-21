//

import React, { useState } from "react";
import { createUseStyles } from "react-jss";
//components
import PageWrapper from "../../components/utilities/PageWrapper";
import FormControl from "../../components/singles/FormControl";
import PageTitle from "../../components/singles/PageTitle";
import CustomFormButton from "../../components/singles/CustomFormButton";
import CustomFormWrapper from "../../components/singles/CustomFormWrapper";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import RightNav from "../../components/sections/RightNav";

const useStyles = createUseStyles({
	forgotPassword: {
		textAlign: "right",
		paddingBottom: "10%",
	},
});

interface Proptypes {}

const LoginPage = () => {
	//

	//hooks
	const classes = useStyles();
	const history = useHistory();
	const [_formData, set_formData] = useState({
		email: "",
		password: "",
	});

	//on change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		set_formData({ ..._formData, [e.target.name]: e.target.value });
	};

	//on submit
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		//validate
		//send
		alert(JSON.stringify(_formData));
		//clean
		set_formData({ email: "", password: "" });
		//redirect
		history.goBack();
	};

	return (
		<PageWrapper>
			<PageTitle>Log in.</PageTitle>
			<CustomFormWrapper onSubmit={handleSubmit}>
				<FormControl>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={_formData.email}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={_formData.password}
						onChange={handleChange}
					/>
				</FormControl>
				<CustomFormButton>Login</CustomFormButton>
				<Link to={"/reset-password"}>
					<p className={classes.forgotPassword}>Forgotten password</p>
				</Link>
			</CustomFormWrapper>
		</PageWrapper>
	);
};

/**
 * server-side route-match request and fetched data
 */

LoginPage.getPrefetchFunctions = function () {
	return [async (routeParams: object) => {}];
};

export default LoginPage;

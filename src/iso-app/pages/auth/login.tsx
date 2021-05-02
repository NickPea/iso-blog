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
import * as yup from "yup";
import FormError from "../../components/singles/FormError";
import axios from "axios";
import { AppSetUser } from "../../state/actions";
import { useDispatch } from "react-redux";

//styles
const useStyles = createUseStyles({
	forgotPassword: {
		textAlign: "right",
		paddingBottom: "10%",
	},
});

//validation schema
const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(8).required(),
});

interface Proptypes {}

const LoginPage = () => {
	//

	//hooks
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const [_formData, set_formData] = useState({
		email: "",
		password: "",
	});
	const [errorMessage, setErrorMessage] = useState("");

	//on change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setErrorMessage("");
		set_formData({ ..._formData, [e.target.name]: e.target.value });
	};

	//on submit
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		//validate
		const isValid = await schema
			.validate(_formData)
			.then((isValid) => {
				return isValid;
			})
			.catch((err) => setErrorMessage(err.message));
		if (!isValid) {
			return;
		}
		//prep
		const formData = new FormData();
		Object.keys(_formData).forEach((key) => {
			formData.append(key, _formData[key]);
		});
		//clean up
		set_formData({
			email: "",
			password: "",
		});
		//send
		try {
			await axios.post("/auth/login", formData);
		} catch (err) {
			if (err.response.status === 401) {
				setErrorMessage('User credentials not found. Please try again or register first')
			}
			if (err.response.status === 500) {
				setErrorMessage('A server error occurred. Please refresh page or try again later')
			}
			return;
		}
		//set user state
		await axios.get("/auth/user").then((res) => dispatch(AppSetUser(res.data)));
		//redirect
		history.push("/");
	};

	return (
		<PageWrapper>
			<PageTitle>Log in.</PageTitle>
			<CustomFormWrapper onSubmit={handleSubmit} noValidate>
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
				<FormError textAlign="right">{errorMessage}</FormError>
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

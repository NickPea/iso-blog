//

import React, { useState } from "react";
import { createUseStyles } from "react-jss";
//components
import PageWrapper from "../../components/utilities/PageWrapper";
import FormControl from "../../components/singles/FormControl";
import PageTitle from "../../components/singles/PageTitle";

const useStyles = createUseStyles({
	FormWrapper: {
		width: "100%",
		paddingBottom: "10%",
	},
	"@media (min-width:600px)": {
		FormWrapper: {},
	},
	"@media (min-width:900px)": {
		FormWrapper: {},
	},
});

interface Proptypes {}

const RegisterPage = () => {
	//

	const [_formData, set_formData] = useState({
		name: "",
		avatar: "",
		email: "",
		password: "",
		confirm_password: "",
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
	};

	//classes
	const classes = useStyles();

	return (
		<PageWrapper>
            <PageTitle>Register as a new user.</PageTitle>
			<form className={classes.FormWrapper} onSubmit={handleSubmit}>
				<FormControl>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={_formData.name}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl>
					<label htmlFor="avatar">Avatar</label>
					<input
						type=""
						id="avatar"
						name="avatar"
						value={_formData.avatar}
						onChange={handleChange}
					/>
				</FormControl>
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
				<FormControl>
					<label htmlFor="confirm-password">Confirm Password</label>
					<input
						type="password"
						id="confirm-password"
						name="confirm-password"
						value={_formData.confirm_password}
						onChange={handleChange}
					/>
				</FormControl>
			</form>
		</PageWrapper>
	);
};

/**
 * server-side route-match request and fetched data
 */

RegisterPage.getPrefetchFunctions = function () {
	return [async (routeParams: object) => {}];
};

export default RegisterPage;

//

import React, { useState } from "react";
import { createUseStyles } from "react-jss";
//components
import PageWrapper from "../../components/utilities/PageWrapper";
import FormControl from "../../components/singles/FormControl";
import PageTitle from "../../components/singles/PageTitle";
import CustomFormButton from "../../components/singles/CustomFormButton";
import CustomFormWrapper from "../../components/singles/CustomFormWrapper";
import { useHistory, useLocation } from "react-router";

const useStyles = createUseStyles({});

interface Proptypes {}

const ResetPasswordPage = () => {
	//

	//hooks
	const history = useHistory();
	const classes = useStyles();
	const [_formData, set_formData] = useState({
		email: "",
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
		set_formData({ email: "" });
		//redirect
		history.push("/reset-password-email-sent");
	};

	return (
		<PageWrapper>
			<PageTitle>Reset your password.</PageTitle>
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
				<CustomFormButton>Reset Password</CustomFormButton>
			</CustomFormWrapper>
		</PageWrapper>
	);
};

/**
 * server-side route-match request and fetched data
 */

ResetPasswordPage.getPrefetchFunctions = function () {
	return [async (routeParams: object) => {}];
};

export default ResetPasswordPage;

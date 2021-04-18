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

const ResetPasswordPage = () => {
	//

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
	};

	//classes
	const classes = useStyles();

	return (
		<PageWrapper>
			<PageTitle>Reset your password.</PageTitle>
			<form className={classes.FormWrapper} onSubmit={handleSubmit}>
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
			</form>
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

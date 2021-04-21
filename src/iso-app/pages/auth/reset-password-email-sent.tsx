//

import React, { useState } from "react";
import { createUseStyles } from "react-jss";
//components
import PageWrapper from "../../components/utilities/PageWrapper";
import FormControl from "../../components/singles/FormControl";
import PageTitle from "../../components/singles/PageTitle";
import CustomFormButton from "../../components/singles/CustomFormButton";
import CustomFormWrapper from "../../components/singles/CustomFormWrapper";

const useStyles = createUseStyles({});

interface Proptypes {}

const ResetPasswordEmailSentPage = () => {
	//
	
	//hooks
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
	};

	return (
		<PageWrapper>
			<PageTitle>Email sent.</PageTitle>
			<p>
				An email has been sent with further instruction on resetting your
				password.
			</p>
		</PageWrapper>
	);
};

/**
 * server-side route-match request and fetched data
 */

ResetPasswordEmailSentPage.getPrefetchFunctions = function () {
	return [async (routeParams: object) => {}];
};

export default ResetPasswordEmailSentPage;

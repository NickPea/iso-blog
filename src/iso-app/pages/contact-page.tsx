//

import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import PageWrapper from "../components/utilities/PageWrapper";
//components

//assets

const useStyles = createUseStyles({
	pageTitle: {
		marginBottom: "10%",
	},
	formWrapper: {
		width: "100%",
	},
	"@media (min-width:900px)": {
		formWrapper: {
			width: "50%",
		},
	},
	formControl: {
		"&": {
			paddingBottom: "10%",
		},
		"& label": {
			display: "block",
			paddingBottom: "1%",
		},
		"& input, & textarea, & button": {
			width: "100%",

			border: "1px solid var(--dull-color)",
			borderRadius: "3px",
			backgroundColor: "inherit",

			fontFamily: "inherit",
			fontSize: "1rem",
			padding: "3%",
		},
	},
	customFormButton: {
		width: "50% !important",
		marginLeft: "50% !important",

		color: "var(--light-text) !important",
		backgroundColor: "var(--secondary-color) !important",
		border: "none !important",

		cursor: "pointer",

		"&:hover": {
			transform: "translateY(-1px)",
			boxShadow: "1px 1px 5px 0 var(--dull-color)",
		},
	},
});

const ContactPage = () => {
	//

	//local state
	const [_formData, set_formData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	//on change
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		set_formData({ ..._formData, [e.target.name]: e.target.value });
	};

	//on submit
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		//validate

		//send
		alert(JSON.stringify(_formData));
	};

	//classes
	const classes = useStyles();

	return (
		<PageWrapper>
			<h3 className={classes.pageTitle}>Contact Me</h3>
			<form className={classes.formWrapper} onSubmit={handleSubmit}>
				{/* name */}
				<div className={classes.formControl}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={_formData.name}
						onChange={handleChange}
					/>
				</div>
				{/* email */}
				<div className={classes.formControl}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={_formData.email}
						onChange={handleChange}
					/>
				</div>
				{/* subject */}
				<div className={classes.formControl}>
					<label htmlFor="subject">Subject</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={_formData.subject}
						onChange={handleChange}
					/>
				</div>
				{/* message */}
				<div className={classes.formControl}>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						rows={10}
						value={_formData.message}
						onChange={handleChange}
					/>
				</div>
				<div className={classes.formControl}>
					<button className={classes.customFormButton} type="submit">
						Send
					</button>
				</div>
			</form>
		</PageWrapper>
	);
};

ContactPage.getPrefetchFunctions = () => {
	return [async (routeParams: object) => {}];
};

export default ContactPage;

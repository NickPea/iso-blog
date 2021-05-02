//

import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import * as yup from "yup";
//components
import PageWrapper from "../../components/utilities/PageWrapper";
import FormControl from "../../components/singles/FormControl";
import PageTitle from "../../components/singles/PageTitle";
import CustomFormWrapper from "../../components/singles/CustomFormWrapper";
import CustomFormButton from "../../components/singles/CustomFormButton";
import FormError from "../../components/singles/FormError";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppSetUser } from "../../state/actions";

const defaultAvatarDataURI =
	"data:image/jpeg;base64,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";

const useStyles = createUseStyles({
	avatarWrapper: {
		paddingBottom: "3%",
		"& img": {
			height: 150,
			width: 150,
			objectFit: "cover",
			objectPosition: "center",
			borderRadius: "50%",
		},
	},
});

const schema = yup.object({
	name: yup.string().required(),
	avatar: yup.mixed().required("please upload a photo to use as your avatar"),
	email: yup.string().email().required(),
	password: yup.string().min(8).required(),
	confirm_password: yup
		.string()
		.oneOf([yup.ref("password")], "passwords must match"),
});

interface Proptypes {}

const RegisterPage = () => {
	//

	//hooks
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();
	const [_formData, set_formData] = useState({
		name: "",
		avatar: undefined,
		email: "",
		password: "",
		confirm_password: "",
	});
	const [imageDisplaySrc, setAvatarDisplaySrc] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	//on change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setErrorMessage("");
		if (e.target.type === "file" && e.target.files.length === 1) {
			//set form data file
			let file = e.target.files[0];
			set_formData({
				..._formData,
				[e.target.name]: file,
			});
			//set image display url
			let imageFileObjectURL = URL.createObjectURL(file);
			setAvatarDisplaySrc(imageFileObjectURL);
		} else {
			set_formData({ ..._formData, [e.target.name]: e.target.value });
		}
	};

	//on submit
	const handleSubmit = async (e: React.FormEvent) => {
		//
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
		formData.delete("confirm_password");
		//clean up
		set_formData({
			name: "",
			avatar: "",
			email: "",
			password: "",
			confirm_password: "",
		});
		//send
		try {
			await axios.post("/auth/register", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		} catch (err) {
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
			<PageTitle>Register as a new user.</PageTitle>
			<div className={classes.avatarWrapper}>
				<img src={imageDisplaySrc || defaultAvatarDataURI} alt="" />
			</div>
			<CustomFormWrapper onSubmit={handleSubmit} noValidate>
				<FormControl>
					<label htmlFor="avatar">Avatar</label>
					<input
						type="file"
						id="avatar"
						name="avatar"
						onChange={handleChange}
						accept="image/*"
					/>
				</FormControl>
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
						id="confirm_password"
						name="confirm_password"
						value={_formData.confirm_password}
						onChange={handleChange}
					/>
				</FormControl>
				<FormError textAlign="right">{errorMessage}</FormError>
				<CustomFormButton>Register</CustomFormButton>
			</CustomFormWrapper>
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

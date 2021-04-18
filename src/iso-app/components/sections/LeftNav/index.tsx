//

import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
//assets
import imgPath from "../../../../assets/headshot.jpeg";
//components
import GenericNav from "../../../routing/GenericNav";

const useStyles = createUseStyles({
	leftNavWrapper: {
		height: "100%",

		backgroundColor: "var(--primary-color)",
		padding: "15% 0",

		display: "flex",
		flexFlow: "column nowrap",
		alignItems: "center",
	},
	headShot: {
		height: 130,
		width: 130,
		objectFit: "cover",
		borderRadius: "50%",
		border: "5px solid white",
		marginBottom: 15,
	},
	title: {
		textAlign: "center",
		color: "var(--light-text)",
		marginBottom: "5px",
	},
	subTitle: {
		color: "var(--secondary-color)",
		marginBottom: "30px",
	},
});

export default () => {
	//
	const classes = useStyles();

	return (
		<div className={classes.leftNavWrapper}>
			<img className={classes.headShot} src={imgPath} alt="headshot image" />
			<h2 className={classes.title}>Nick Phillips</h2>
			<h4 className={classes.subTitle}>Bring it together!</h4>
			<GenericNav
				color={"var(--light-text)"}
				hoverColor={"var(--dull-text)"}
				stack
				spacing={"30px"}
				size={"1.2rem"}
			/>
		</div>
	);
};

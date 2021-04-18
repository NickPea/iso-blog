//

import React from "react";
import { createUseStyles } from "react-jss";

//components
import PictureSet from "../components/singles/PictureSet";
import PageWrapper from "../components/utilities/PageWrapper";

//assets
import headshotImagePath from "../../assets/headshot.jpeg";

const useStyles = createUseStyles({
	pageTitle: {
		marginBottom: "10%",
	},
	contentPosition: {
		display: "flex",
		flexFlow: "column nowrap",
		alignItems: "center",
	},
	aboutImage: {
		width: "50%",
		objectFit: "cover",
		borderRadius: "50%",
		border: "5px solid var(--primary-color)",
		marginBottom: "10%",
	},
	aboutBlurb: {
		paddingBottom: "5%",
		fontStyle: "italic",
	},
	aboutParagraph: {
		// padding: "0 5% 10% 5%",
		textAlign: "center",
	},
});

const AboutPage = () => {
	//

	//classes
	const classes = useStyles();

	//computed

	return (
		<PageWrapper>
			{/* title */}
			<h3 className={classes.pageTitle}>About Me</h3>
			{/* image */}
			<div className={classes.contentPosition}>
				<img className={classes.aboutImage} src={headshotImagePath} />
			</div>
			{/* blurb */}
			<div className={classes.aboutBlurb}>
				<p className={classes.aboutParagraph}>
					Hi! I am Nick! I'm a passionate and profressional web technology
					developer. I specialize in all flavours of javascipt, howvever I have
					a particular interest in iso-morhphic react applications (which is
					exactly the type of web application your using as the moment).
				</p>
				<br />
				<p className={classes.aboutParagraph}>
					These lessons are intended to be a living record that will help
					others, and myself refine our programming skills and knowledge. Please
					join in by adding to the the discussions, providing feedback, making
					recommendations, and putting forth requests for topics you would like
					to learn.
				</p>
			</div>
		</PageWrapper>
	);
};

AboutPage.getPrefetchFunctions = () => {
	return [async (routeParams: object) => {}];
};

export default AboutPage;

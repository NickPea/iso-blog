//
import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import PictureSet from "../PictureSet";

const useStyles = createUseStyles({
	articleWrapper: {},
	linkReset: {
		// resent
		color: "inherit",
		textDecoration: "none",
	},
	title: (props: Proptypes) => ({
		padding: "1% 1% 5% 1%",

		transition: "300ms",
		borderRadius: "5px",
		"&:hover": props.linkTo
			? {
					color: "var(--primary-color)",
					textDecoration: "underline",
					backgroundColor: "var(--light-hover-color)",
			  }
			: {},
	}),
	publishDate: {
		padding: "5% 0 5% 5%",

		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",

		"& h4": {
			paddingLeft: "5px",
			fontWeight: "normal",
			color: "var(--dull-text)",
		},
		"@media (min-width:600px)": {
			float: "right",
			padding: "1% 1% 1% 5%",
		},
	},

	imagePadding: {
		paddingBottom: "5%",
	},
	body: {},
});

interface Proptypes {
	title: string;
	publishDate: Date;
	bodyHtml: any;
	linkTo?: string;
	imgSrc?: string;
	imgAlt?: string;
	imgCaption?: string;
	srcSetIpad?: string;
	srcSetDesktop?: string;
	theme?: any;
}

export default (props: Proptypes) => {
	//
	const classes = useStyles(props);

	return (
		<div className={classes.articleWrapper}>
			<article>
				{/* date */}
				{props.publishDate && (
					<div className={classes.publishDate}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							height="20px"
							width="20px"
							fill="var(--dull-text)"
						>
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z" />
						</svg>
						<h4>{props.publishDate}</h4>
					</div>
				)}
				{/* title, link and date*/}
				{props.linkTo ? (
					<Link className={classes.linkReset} to={props.linkTo}>
						<h1 className={classes.title}>{props.title}</h1>
					</Link>
				) : (
					<h1 className={classes.title}>{props.title}</h1>
				)}
				{/* responsive images - optional */}
				{props.imgSrc && (
					<div className={classes.imagePadding}>
						<PictureSet
							imgSrc={props.imgSrc}
							imgAlt={props.imgAlt}
							imgCaption={props.imgCaption}
							srcSetIpad={props.srcSetIpad}
							srcSetDesktop={props.srcSetDesktop}
						/>
					</div>
				)}
				{/* body */}
				<div
					className={classes.body}
					dangerouslySetInnerHTML={{ __html: props.bodyHtml }}
				></div>
			</article>
		</div>
	);
};

//
import React from "react";
import { createUseStyles } from "react-jss";
import PictureSet from "../PictureSet";

const useStyles = createUseStyles({
	articleWrapper: {},
	title: {
		paddingBottom: "5%",
	},
	imagePadding: {
		paddingBottom: "5%",
	},
	body: {},
	"@media (min-width: 600px)": {
		title: {
			fontSize: "2rem",
		},
	},
	"@media (min-width: 900px)": {
		title: {
			fontSize: "3rem",
		},
	},
});

interface Proptypes {
	title: string;
	bodyHtml: any;
	imgSrc?: string;
	imgAlt?: string;
	imgCaption?: string;
	srcSetIpad?: string;
	srcSetDesktop?: string;
}

export default (props: Proptypes) => {
	//
	const classes = useStyles();

	return (
		<div className={classes.articleWrapper}>
			<article>
				{/* title */}
				<h1 className={classes.title}>{props.title}</h1>
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

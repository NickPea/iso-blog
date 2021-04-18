//

import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
//

const useStyles = createUseStyles({
	pictureSetContainer: {
		position: "relative",
	},
	image: {
		width: "100%",
		height: "auto",
		objectFit: "cover",
		// objectPosition: "50px 0",
	},
	imageCaptionOverlay: {
		position: 'absolute',
        bottom: '3%',
        right: '1%',

        padding: '5px',
        backgroundColor: 'white',
        borderRadius: '3px',
	},
});

interface Proptypes {
	imgSrc: string;
	imgAlt?: string;
	imgCaption?: string;
	srcSetIpad?: string;
	srcSetDesktop?: string;
}

export default (props: Proptypes) => {
	//

	const classes = useStyles();

	return (
		<div className={classes.pictureSetContainer}>
			<picture>
				{props.srcSetDesktop && (
					<source media="(min-width: 900px)" srcSet={props.srcSetDesktop} />
				)}
				{props.srcSetIpad && (
					<source media="(min-width: 600px)" srcSet={props.srcSetIpad} />
				)}
				{props.imgSrc && (
					<img
						className={classes.image}
						src={props.imgSrc}
						alt={props.imgAlt}
					/>
				)}
			</picture>
			{props.imgCaption && (
				<small className={classes.imageCaptionOverlay}>{props.imgCaption}</small>
			)}
		</div>
	);
};

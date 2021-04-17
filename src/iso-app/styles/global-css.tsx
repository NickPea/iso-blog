//

import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";

const useGlobalStyles = createUseStyles({
	"@global": {
		"*": {
			boxSizing: "border-box",
		},
		body: {
			margin: 0,
		},
		"p, h1, h2, h3, h4, h5 ,h6": {
			margin: 0,
		},
		"@media (min-width: 600px)": {
			h1: {
				fontSize: "2rem",
			},
			h2: { fontSize: "1.5rem" },
		},
		"@media (min-width: 900px)": {
			h1: {
				fontSize: "3rem",
			},
			h2: { fontSize: "2rem" },
		},
	},
	presets: {
		fontFamily: "sans-serif",
		"--primary-color": "rgb(40,40,90)",
		"--rightnav-color": "whitesmoke",
		"--light-text": "whitesmoke",
		"--dull-text": "rgb(119,119,119)",
		"--dark-text": "rgb(50,50,50)",
		"--light-hover-color": "rgb(230,230,230)",
	},
});

interface Proptypes {
	children: any;
}

export default (props: Proptypes) => {
	//
	const classes = useGlobalStyles();

	return (
		<div className={`${classes["@global"]} ${classes.presets}`}>
			{props.children}
		</div>
	);
};

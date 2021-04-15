//

import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";

const useGlobalStyles = createUseStyles({
	"@global": {
		body: {
			margin: 0,
		},
		"p, h1, h2, h3, h4, h5 ,h6": {
			margin: 0,
		},
	},
	presets: {
		fontFamily: "sans-serif",
		"--leftnav-color": "rgb(51,195,102)",
		"--rightnav-color": "whitesmoke",
		"--light-text": "whitesmoke",
		"--dull-text": "rgb(119,119,119)",
		"--dark-text": "rgb(50,50,50)",
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

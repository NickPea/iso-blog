//

import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme)=> ({
	'img:before': {
		content: 'hello rodjer'
	}
}));

interface propTypes {
	imageSrc: string;
}

export default (props: propTypes) => {
	//

	const classes = useStyles();

	return (
		<div>
			<img className={classes["img:before"]} src={props.imageSrc} alt="image error" />
		</div>
	);
};



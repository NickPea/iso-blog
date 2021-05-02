//

import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
	formWrapper: {
		width: "100%",
	},
	"@media (min-width:900px)": {
		formWrapper: {
			width: "50%",
		},
	},
});

export default (props: any) => {
	//

	const classes = useStyles();
	return (
		<form className={classes.formWrapper} {...props}>
			{props.children}
		</form>
	);
};

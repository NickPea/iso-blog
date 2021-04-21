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

interface Proptypes {
	children: React.ReactNode;
	onSubmit: (e: React.FormEvent<Element>) => void;
}

export default (props: Proptypes) => {
	//

	const classes = useStyles();
	return <form className={classes.formWrapper} onSubmit={props.onSubmit}>{props.children}</form>;
};

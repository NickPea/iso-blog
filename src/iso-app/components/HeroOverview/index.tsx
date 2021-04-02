//

import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
	blue_bayou: {
		backgroundColor: "blueviolet",
	},
}));

export default () => {
	const jss = useStyles();
	return <div>{jss.blue_bayou}</div>;
};

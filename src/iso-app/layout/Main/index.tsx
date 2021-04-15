//

import React, { ReactElement } from "react";
import { createUseStyles } from "react-jss";

//components
import Footer from "../../components/Footer";
import LeftNav from "../../components/LeftNav";
import RightNav from "../../components/RightNav";

const useStyles = createUseStyles({
	container: {
		display: "grid",
		gridTemplateAreas: `
			'left main main main right'
			'footer footer footer footer footer'
		`,
	},
	left: {
		gridArea: "left",
	},
	main: {
		gridArea: "main",
	},
	right: {
		gridArea: "right",
	},
	footer: {
		gridArea: "footer",
	},
});

interface PropTypes {
	children: any;
}

export default ({ children }: PropTypes) => {
	//
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.left}>
				<LeftNav />
			</div>
			<div className={classes.main}>{children}</div>
			<div className={classes.right}>
				<RightNav />
			</div>
			<div className={classes.footer}>
				<Footer />
			</div>
		</div>
	);
};

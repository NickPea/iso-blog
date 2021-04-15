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
			'left-nav left-nav left-nav left-nav left-nav'
			'main main main main main'
			'footer footer footer footer footer'
		`,
	},
	left_nav: {
		gridArea: "left-nav",
	},
	main: {
		gridArea: "main",
	},
	right_nav: {
		gridArea: "right-nav",
		display: "none",
	},
	footer: {
		gridArea: "footer",
	},
	"@media (min-width: 600px)": {
		container: {
			gridTemplateAreas: `
			'left-nav main main main main'
			'footer footer footer footer footer'
		`,
		},
	},
	"@media (min-width: 900px)": {
		container: {
			gridTemplateAreas: `
			'left-nav main main main right-nav'
			'footer footer footer footer footer'
		`,
		},
		right_nav: {
			display: "block",
		},
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
			<div className={classes.left_nav}>
				<LeftNav />
			</div>
			<div className={classes.main}>{children}</div>
			<div className={classes.right_nav}>
				<RightNav />
			</div>
			<div className={classes.footer}>
				<Footer />
			</div>
		</div>
	);
};

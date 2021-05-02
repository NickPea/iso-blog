//

import React, { ReactElement } from "react";
import { createUseStyles } from "react-jss";
import AuthButton from "../../components/singles/AuthButton";

//components
import Footer from "../../components/sections/Footer";
import LeftNav from "../../components/sections/LeftNav";
import RightNav from "../../components/sections/RightNav";
import TopNav from "../../components/sections/TopNav";

const useStyles = createUseStyles({
	mainLayoutWrapper: {
		display: "grid",
		gridTemplateAreas: `
			'top-nav top-nav top-nav'
			'left-nav left-nav left-nav'
			'main main main'
			'footer footer footer'
		`,
	},
	top_nav: {
		gridArea: "top-nav",
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
		mainLayoutWrapper: {
			gridTemplateRows: 'max-content auto auto',
			gridTemplateColumns: "30% auto auto",
			gridTemplateAreas: `
			'left-nav top-nav top-nav'
			'left-nav main main'
			'footer footer footer'
		`,
		},
	},
	"@media (min-width: 900px)": {
		mainLayoutWrapper: {
			gridTemplateColumns: "25% auto 20%",
			gridTemplateAreas: `
			'left-nav top-nav top-nav'
			'left-nav main right-nav'
			'footer footer footer'
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
		<div className={classes.mainLayoutWrapper}>
			<div className={classes.top_nav}>
				<TopNav />
			</div>
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

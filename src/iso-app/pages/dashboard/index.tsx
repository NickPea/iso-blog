//

import React from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//components
import PageTitle from "../../components/singles/PageTitle";
import { PlusIcon } from "../../components/svgs/plus";
import PageWrapper from "../../components/utilities/PageWrapper";
import { FourZeroOne } from "../error/401";

const useStyles = createUseStyles({
	menuBar: {
		display: "flex",
		flexFlow: "row wrap",
		alignItems: "center",
		justifyContent: "flex-end",

		padding: 5,
		borderBottom: '1px solid var(--dull-color)'
	},
	iconButton: {
		width: 35,
		height: 35,
		borderRadius: "50%",
		"&:hover": {
			boxShadow: "0 0 2px 1px var(--dull-color)",
		},
		"&:active": {
			transform: "translateY(1px)",
		},
	},
});

const Dashboard = () => {
	//

	//hookes
	const classes = useStyles();
	const app_auth_user = useSelector((state: any) => state.app.auth.user);

	if (!app_auth_user) {
		return <FourZeroOne />;
	}
	return (
		<PageWrapper>
			<PageTitle>Dashboard</PageTitle>
			{/* menu bar */}
			<div className={classes.menuBar}>
				<Link to={'/dashboard/new-post'}>
					<div className={classes.iconButton} title="new article">
						<PlusIcon />
					</div>
				</Link>
			</div>

			{/* articles written and stats (likes/comments/etc) */}
		</PageWrapper>
	);
};

Dashboard.getPrefetchFunctions = () => {
	return [async (routeParams: object) => {}];
};

export default Dashboard;

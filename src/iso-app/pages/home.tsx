//

import React from "react";
import { createUseStyles } from "react-jss";
import { RootStateOrAny, useSelector } from "react-redux";
//prefetch
import ApiService from "../../server/serve-api/api-service";
import PageWrapper from "../components/Utils/PageWrapper";
//

const useStyles = createUseStyles({});

const HomePage = () => {
	//
	const state = useSelector((state: RootStateOrAny) => state);
	//
	const classes = useStyles();

	return <PageWrapper></PageWrapper>;
};

HomePage.getPrefetchFunctions = function () {
	return [
		async (params: object) => {
			return await ApiService.generateFakeData();
		},
	];
};

export default HomePage;

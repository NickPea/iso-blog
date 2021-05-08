//

import React, { useEffect, useState } from "react";
import { createUseStyles, JssContext } from "react-jss";
import { useSelector } from "react-redux";
//components
import PageTitle from "../../components/singles/PageTitle";
import PageWrapper from "../../components/utilities/PageWrapper";
import { FourZeroOne } from "../error/401";

const useStyles = createUseStyles({});

const NewArticle = () => {
	const classes = useStyles();

	//dynamic client only component import
	const [ClientOnlyTextEditor, setClientOnlyTextEditor]: any = useState();
	useEffect(() => {
		const loadDynamic = async () => {
			const imported = await import("../../components/singles/TextEditor");
			setClientOnlyTextEditor(() => imported.default);
		};
		loadDynamic();
	}, []);

	//auth
	const app_auth_user = useSelector((state: any) => state.app.auth.user);

	//401
	if (!app_auth_user) {
		return <FourZeroOne />;
	}

	//render
	return (
		<PageWrapper>
			<PageTitle>New Article</PageTitle>
			{ClientOnlyTextEditor ? <ClientOnlyTextEditor /> : <div>...Loading</div>}
		</PageWrapper>
	);
};

NewArticle.getPrefetchFunctions = () => {
	return [async (routeParams: object) => {}];
};

export default NewArticle;

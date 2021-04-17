//

import React, { useState, useEffect } from "react";
import PageWrapper from "../components/Utils/PageWrapper";

//delete
import { articles } from "../../../DATA-DELETE";
import { useParams } from "react-router";
import axios from "axios";

const ArticlePage = () => {
	//

	/**
	 *  client-side route-match requested article and fetch data
	 */

	// const params: { articleslug: string } = useParams();
	// const [_article, set_article] = useState();
	// useEffect(() => {
	// 	axios
	// 		.get(`api/article/${params.articleslug}`)
	// 		.then((res) => res.data)
	// 		.then((data) => {
	// 			// set state with data
	// 		});
	// });

	return <PageWrapper>{}</PageWrapper>;
};

ArticlePage.getPrefetchFunctions = () => {
	return [];
};

export default ArticlePage;

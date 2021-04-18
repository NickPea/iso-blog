//

import React from "react";
import { Route, Switch } from "react-router";
import PageWrapper from "../components/utilities/PageWrapper";
import routeList from "./routes";

export default () => {
	return (
		<Switch>
			{routeList.map((route) => {
				return (
					<Route key={route.path} path={route.path} exact>
						{React.createElement(route.component, null, null)}
					</Route>
				);
			})}
			<Route path="*">
				<PageWrapper>404: page not found</PageWrapper>
			</Route>
		</Switch>
	);
};

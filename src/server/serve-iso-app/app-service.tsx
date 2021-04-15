//

import React, { ReactElement } from "react";
import reactDomServer from "react-dom/server";
import { StaticRouter, matchPath, match } from "react-router-dom";
import { Provider } from "react-redux";
import IsoApp from "../../iso-app/app";
import { createIsoStore } from "../../iso-app/state/store";
import htmlTemplate from "./html-template";
import { merge } from "lodash";
import { Store } from "redux";
import { JssProvider, SheetsRegistry, createGenerateId } from "react-jss";
import routeList from "../../iso-app/routing/routes";

//

export default class {
	//

	static clientBundlePath = "/client.js";
	static initialServerState = { data: {}, app: {}, ui: {} };

	//render server iso-app with initialized store and static router wrappers
	static renderServerAppAndStylesToString(
		store: Store,
		requestUrl: string
	): [string, string] {
		//

		//jss setup
		const sheets = new SheetsRegistry();
		const generateId = createGenerateId();

		const appString = reactDomServer.renderToString(
			<JssProvider registry={sheets} generateId={generateId}>
				<Provider store={store}>
					<StaticRouter location={requestUrl}>
						<IsoApp />
					</StaticRouter>
				</Provider>
			</JssProvider>
		);

		const stylesString = sheets.toString();

		return [appString, stylesString];
	}

	//insert app string into html template
	static InsertIntoHtmlTemplate(
		serverAppString?: string,
		serverStylesString?: string,
		clientAppState?: { data: any; app: any; ui: any },
		clientBundlePath?: string
	) {
		return htmlTemplate(serverAppString, serverStylesString, clientAppState, clientBundlePath);
	}

	static matchReactRouterPaths(
		requestPath: string,
		listOfSharedRoutes: { path: string; component: ReactElement | any }[],
		reactRouter4MatchPathFn: any
	) {
		const listOfRoutePaths = listOfSharedRoutes.map((sharedRoute) => {
			return sharedRoute.path;
		});
		return reactRouter4MatchPathFn(requestPath, {
			path: listOfRoutePaths,
			exact: true,
		});
	}

	static extractRoutePrefetchFunctions(
		match: match,
		listofSharedRoutes: { path: string; component: ReactElement | any }[]
	): [] {
		try {
			return listofSharedRoutes
				.find((route) => match.path === route.path)
				.component.getPrefetchFunctions(match.params);
		} catch (error) {
			throw Error(
				"getPrefetchFunctions() is not defined on react page element.\n" +
					"-- If no server-side-rendered state is need for this page, please define a getPrefetchFunctions method and return an empty array"
			);
		}
	}

	static extractStateFromPrefetchFunctions(prefetchFunctions: any[]) {
		const reducer = async (nextState, prefetchFn: () => {}) => {
			return merge(nextState, await prefetchFn());
		};
		if (prefetchFunctions.length === 0) {
			return {
				data: {},
				app: {},
				ui: {},
			};
		}
		const cumulativeFunctionResults = prefetchFunctions.reduce(reducer, {
			data: {},
			app: {},
			ui: {},
		});
		return cumulativeFunctionResults;
	}

	//main function

	static async renderAppToHtml(requestPath: string) {
		//

		//match route with react-router-dom logic
		const match = this.matchReactRouterPaths(requestPath, routeList, matchPath);

		//short-circuit if no match
		if (match !== null) {
			//extract route's component-prefetch functions
			const prefetchFunctions = this.extractRoutePrefetchFunctions(
				match,
				routeList
			);

			//run component-prefetch functions and create state
			this.initialServerState = await this.extractStateFromPrefetchFunctions(
				prefetchFunctions
			);
		}

		console.log(
			`AppService - Rendered State: ${JSON.stringify(this.initialServerState)}`
		);

		//create store and pass created state
		const store = createIsoStore(this.initialServerState);

		//render server app to string based on state and reqest path
		const [serverAppString, serverStylesString] = this.renderServerAppAndStylesToString(store, requestPath);

		//wrap render...etc in html for final response
		const htmlResponseWrapper = this.InsertIntoHtmlTemplate(
			serverAppString,
			serverStylesString,
			this.initialServerState,
			this.clientBundlePath
		);

		return htmlResponseWrapper;
	}
}

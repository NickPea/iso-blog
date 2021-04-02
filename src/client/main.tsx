//

import React, { useEffect, useState } from "react";
import reactDom from "react-dom";
import IsoApp from "../iso-app/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createIsoStore } from "../iso-app/state/store";

const BrowserApp = () => {
	//

	//match server rendered state
	const initialServerState = (window as any).__INITIAL_SERVER_STATE__;
	const store = createIsoStore(initialServerState);
	
	//after render, remove server rendered jss
	useEffect(() => {
		// delete (window as any).__INITIAL_SERVER_STATE__;
		document.querySelector("style[data-client-removable-ssr-jss]").remove();
	}, []);

	return (
		<Provider store={store}>
			<BrowserRouter>
				<IsoApp />
			</BrowserRouter>
		</Provider>
	);
};

reactDom.hydrate(<BrowserApp />, document.getElementById("root"));

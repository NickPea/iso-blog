//

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { appRootReducer } from "../reducers/app";
import { dataRootReducer } from "../reducers/data";
import { uiRootReducer } from "../reducers/ui";
import { rootSaga } from "../sagas/root";

export const createIsoStore = (initialState?: any) => {
	//

	const sagaMiddleWare = createSagaMiddleware();

	const store = configureStore({
		reducer: {
			data: dataRootReducer,
			app: appRootReducer,
			ui: uiRootReducer,
		},
		preloadedState: initialState,
		middleware: [sagaMiddleWare],
	});

	sagaMiddleWare.run(rootSaga);

	return store;

};

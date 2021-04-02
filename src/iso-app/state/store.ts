//

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { appReducer, dataReducer, uiReducer } from "./reducers";
import { rootSaga } from "./sagas";

export const createIsoStore = (initialState?: any) => {
	//

	const sagaMiddleWare = createSagaMiddleware();

	const store = configureStore({
		reducer: {
			data: dataReducer,
			app: appReducer,
			ui: uiReducer,
		},
		preloadedState: initialState,
		middleware: [sagaMiddleWare],
	});

	sagaMiddleWare.run(rootSaga);

	return store;
};

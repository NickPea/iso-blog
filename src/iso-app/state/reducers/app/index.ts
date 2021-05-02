//

import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { APP_BOOT_FINISH } from "../../actions";

const initReducer = (
	state = {},
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case APP_BOOT_FINISH:
			return { ...state, boot: "initiated" };
		default:
			return state;
	}
};

export const appRootReducer = combineReducers({init: initReducer, auth: authReducer});

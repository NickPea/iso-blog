//

import { combineReducers } from "@reduxjs/toolkit";
import { CONST_APP_BOOT_FINISH } from "./actions";

//reducers
export const dataReducer = (state = {}, action: { type: string; payload: any }) => {
	switch (action.type) {
		case CONST_APP_BOOT_FINISH:
			return {...state, boot: 'initiated'}
		default:
			return state;
	}
};
export const appReducer = (state = {}, action: { type: string; payload: any }) => {
	switch (action.type) {
		case CONST_APP_BOOT_FINISH:
			return {...state, boot: 'initiated'}
		default:
			return state;
	}
};
export const uiReducer = (state = {}, action: { type: string; payload: any }) => {
	switch (action.type) {
		case CONST_APP_BOOT_FINISH:
			return {...state, boot: 'initiated'}
		default:
			return state;
	}
};


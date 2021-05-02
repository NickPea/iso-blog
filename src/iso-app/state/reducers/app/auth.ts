//

import { APP_SET_USER } from "../../actions";


//reducers
export const authReducer = (state = {}, action: { type: string; payload: any }) => {
	switch (action.type) {
		case APP_SET_USER:
			return {...state, user: action.payload}
		default:
			return state;
	}
};
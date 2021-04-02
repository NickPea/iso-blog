//

import { take, put, all } from "redux-saga/effects";
import { CONST_APP_BOOT_START, actionAppBootFinish } from "./actions";

export function* AppSaga() {
	while (true) {
		yield take(CONST_APP_BOOT_START);
		yield put(actionAppBootFinish());
	}
}

export const rootSaga = function* () {
	yield all([AppSaga()]);
}

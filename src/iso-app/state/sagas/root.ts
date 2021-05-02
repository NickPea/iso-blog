//

import { take, put, all } from "redux-saga/effects";
import { APP_BOOT_START, AppBootFinish } from "../actions";

export function* AppSaga() {
	while (true) {
		yield take(APP_BOOT_START);
		yield put(AppBootFinish());
	}
}

export const rootSaga = function* () {
	yield all([AppSaga()]);
};

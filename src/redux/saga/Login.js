import { put, takeLatest } from "redux-saga/effects";
import { login } from "../../service/api";
import { request } from "../../service/index";
import { LoginAction } from "../action/Login";
export function* handleLogin(action) {
  try {
    yield put(LoginAction.progress());
    let loginPath = login();
    let data = action.payload;

    yield console.log("req >>> ", JSON.stringify(data));
    let response = yield request("post", loginPath, data);
    yield console.log("Res >>>dev ", JSON.stringify(response));
    if (response) {
      yield put(LoginAction.success(response));
      if (typeof action?.payload?.extraData === "function") {
        action.payload.extraData(response);
      }
    }
  } catch (error) {
    yield put(LoginAction.failure(error));
    if (typeof action?.payload?.onError === "function") {
      action.payload.onError(error);
    }
  }
}

export function* watchLoginRequest() {
  yield takeLatest(LoginAction.types.start, handleLogin);
}

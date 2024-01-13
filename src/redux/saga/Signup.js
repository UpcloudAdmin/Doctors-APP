import { put, takeLatest } from "redux-saga/effects";
import { signup } from "../../service/api";
import { request } from "../../service/index";
import { SignUpAction } from "../action/Signup";
export function* handleSignup(action) {
  try {
    yield put(SignUpAction.progress());
    let signupPath = signup();
    let data = action.payload;

    yield console.log("req >>> ", JSON.stringify(data));
    let response = yield request("post", signupPath, data);
    yield console.log("Res >>>dev ", JSON.stringify(response));
    if (response) {
      yield put(SignUpAction.success(response));
      if (typeof action?.payload?.extraData === "function") {
        action.payload.extraData(response);
      }
    }
  } catch (error) {
    yield put(SignUpAction.failure(error));
    if (typeof action?.payload?.onError === "function") {
      action.payload.onError(error);
    }
  }
}

export function* watchSignUpRequest() {
  yield takeLatest(SignUpAction.types.start, handleSignup);
}

import { put, takeLatest } from "redux-saga/effects";
import { verifyContact } from "../../service/api";
import { request } from "../../service/index";
import { verifyContactAction } from "../action/VerifyContact";
export function* handleVerifyContact(action) {
  try {
    yield put(verifyContactAction.progress());
    let verifyContactPath = verifyContact();
    let data = action.payload;

    yield console.log("req >>> ", JSON.stringify(data));
    let response = yield request("post", verifyContactPath, data);
    yield console.log("Res >>>dev ", JSON.stringify(response));
    if (response) {
      yield put(verifyContactAction.success(response));
      if (typeof action?.payload?.extraData === "function") {
        action.payload.extraData(response);
      }
    }
  } catch (error) {
    yield put(verifyContactAction.failure(error));
    if (typeof action?.payload?.onError === "function") {
      action.payload.onError(error);
    }
  }
}

export function* watchVerifyRequest() {
  yield takeLatest(verifyContactAction.types.start, handleVerifyContact);
}

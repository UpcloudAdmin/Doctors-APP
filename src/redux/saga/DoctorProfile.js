import { put, takeLatest, select, take } from "redux-saga/effects";
import { getDoctorProfile } from "../../service/api";
import { authenticatedRequestImageUpload, request } from "../../service/index";
import { getDoctorProfileAction } from "../action/DoctorProfile";
import { getToken } from "../../screens/selector/state-selectors";

export function* handleDoctorProfile(action) {
  try {
    let token = yield select(getToken);
    let tokenId = token ? token : action?.tokenId;
    yield put(getDoctorProfileAction.progress());
    let getDoctorProfilePath = getDoctorProfile(action?.payload?.id);
    yield console.log("token >>> ", token);
    let response = yield authenticatedRequestImageUpload(
      tokenId,
      getDoctorProfilePath,
      null,
      "get"
    );
    yield console.log("Res >>>dev image ", JSON.stringify(response));
    if (response) {
      yield put(getDoctorProfileAction.success(response));
      if (typeof action?.payload?.extraData === "function") {
        action.payload.extraData(response);
      }
    }
  } catch (error) {
    yield put(getDoctorProfileAction.failure(error));
    if (typeof action?.payload?.onError === "function") {
      action.payload.onError(error);
    }
  }
}

export function* watchDoctorProfileRequest() {
  yield takeLatest(getDoctorProfileAction.types.start, handleDoctorProfile);
}

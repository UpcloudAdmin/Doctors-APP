import { put, takeLatest, select, take } from "redux-saga/effects";
import { doctorProfile } from "../../service/api";
import { authenticatedRequest, request } from "../../service/index";
import { getToken } from "../../screens/selector/state-selectors";
import { DoctorProfileMeAction } from "../action/doctorProfileMe";

export function* handleDoctorMeProfile(action) {
  try {
    let token = yield select(getToken);
    let tokenId = token ? token : action?.tokenId;
    yield put(DoctorProfileMeAction.progress());
    let getDoctorProfilePath = doctorProfile();
    let data = action.payload;
    yield console.log("token >>> ", getDoctorProfilePath);
    let response = yield authenticatedRequest(
      tokenId,
      getDoctorProfilePath,
      data,
      "post"
    );
    yield console.log("Res >>>dev image ", JSON.stringify(response));
    if (response) {
      yield put(DoctorProfileMeAction.success(response));
      if (typeof action?.payload?.extraData === "function") {
        action.payload.extraData(response);
      }
    }
  } catch (error) {
    yield put(DoctorProfileMeAction.failure(error));
    if (typeof action?.payload?.onError === "function") {
      action.payload.onError(error);
    }
  }
}

export function* watchDoctorProfileMeRequest() {
  yield takeLatest(DoctorProfileMeAction.types.start, handleDoctorMeProfile);
}

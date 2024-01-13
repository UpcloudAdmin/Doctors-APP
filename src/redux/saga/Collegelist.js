import { put, takeLatest, select, take } from "redux-saga/effects";
import { doctorCollegeList } from "../../service/api";
import { authenticatedRequestImageUpload, request } from "../../service/index";
import { getCollegeListAction } from "../action/Collegelist";
import { getToken } from "../../screens/selector/state-selectors";

export function* handleCollegeList(action) {
  try {
    let token = yield select(getToken);
    let tokenId = token ? token : action?.tokenId;
    yield put(getCollegeListAction.progress());
    let getCollegeListPath = doctorCollegeList(action?.payload?.id);
    yield console.log("token >>> ", token);
    let response = yield authenticatedRequestImageUpload(
      tokenId,
      getCollegeListPath,
      null,
      "get"
    );
    yield console.log("Res >>>dev image ", JSON.stringify(response));
    if (response) {
      yield put(getCollegeListAction.success(response));
      if (typeof action?.payload?.extraData === "function") {
        action.payload.extraData(response);
      }
    }
  } catch (error) {
    yield put(getCollegeListAction.failure(error));
    if (typeof action?.payload?.onError === "function") {
      action.payload.onError(error);
    }
  }
}

export function* watchCollegeListRequest() {
  yield takeLatest(getCollegeListAction.types.start, handleCollegeList);
}

import { put, takeLatest, select, take } from "redux-saga/effects";
import { addBankAccount } from "../../service/api";
import { authenticatedRequest, request } from "../../service/index";
import { getToken } from "../../screens/selector/state-selectors";
import { getAddBankAccountAction } from "../action/addBankAccount";

export function* handleAddBankAccount(action) {
  try {
    let token = yield select(getToken);
    let tokenId = token ? token : action?.tokenId;
    yield put(getAddBankAccountAction.progress());
    let getAddBankAccountPath = addBankAccount();
    let data = action.payload;
    yield console.log("token >>> ", tokenId);
    let response = yield authenticatedRequest(
      tokenId,
      getAddBankAccountPath,
      data,
      "post"
    );
    yield console.log("Res >>>dev image ", JSON.stringify(response));
    if (response) {
      yield put(getAddBankAccountAction.success(response));
      if (typeof action?.payload?.extraData === "function") {
        action.payload.extraData(response);
      }
    }
  } catch (error) {
    yield put(getAddBankAccountAction.failure(error));
    if (typeof action?.payload?.onError === "function") {
      action.payload.onError(error);
    }
  }
}

export function* watchAddBankAccountRequest() {
  yield takeLatest(getAddBankAccountAction.types.start, handleAddBankAccount);
}

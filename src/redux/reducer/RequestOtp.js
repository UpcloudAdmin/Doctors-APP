import { RequestOtpAction } from "../action/RequestOtp";
import { getStateOfRemoteData } from "./includes";

const RequestOtpState = getStateOfRemoteData(
  "RequestOtpSuccess",
  "RequestOtpFailure",
  "RequestOtpFetching",
  "RequestOtpData",
  "RequestOtpError"
);

export const RequestOtpReducer = (
  state = {
    ...RequestOtpState.initial(),
  },
  action = {}
) => {
  switch (action.type) {
    case RequestOtpAction.types.progress:
      state.RequestOtpData = [];
      return RequestOtpState.isFetching(state);

    case RequestOtpAction.types.success:
      return RequestOtpState.success(state, action);

    case RequestOtpAction.types.failure:
      return RequestOtpState.failure(state, action);

    default:
      return state;
  }
};

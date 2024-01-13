import { getDoctorProfileAction } from "../action/DoctorProfile";
import { getStateOfRemoteData } from "./includes";

const getDoctorProfileState = getStateOfRemoteData(
  "DoctorProfileStateSuccess",
  "DoctorProfileStateFailure",
  "DoctorProfileStateFetching",
  "DoctorProfileStateData",
  "DoctorProfileStateError"
);

export const DoctorProfileReducer = (
  state = {
    ...getDoctorProfileState.initial(),
  },
  action = {}
) => {
  switch (action.type) {
    case getDoctorProfileAction.types.progress:
      state.DoctorProfileStateData = [];
      return getDoctorProfileState.isFetching(state);
    case getDoctorProfileAction.types.success:
      return getDoctorProfileState.success(state, action);
    case getDoctorProfileAction.types.failure:
      return getDoctorProfileState.failure(state, action);

    default:
      return state;
  }
};

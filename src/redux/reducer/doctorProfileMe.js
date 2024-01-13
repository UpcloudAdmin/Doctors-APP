import { DoctorProfileMeAction } from "../action/doctorProfileMe";
import { getStateOfRemoteData } from "./includes";

const DoctorProfileState = getStateOfRemoteData(
  "DoctorProfileSuccess",
  "DoctorProfileFailure",
  "DoctorProfileFetching",
  "DoctorProfileData",
  "DoctorProfileError"
);

export const DoctorProfileMeReducer = (
  state = {
    ...DoctorProfileState.initial(),
  },
  action = {}
) => {
  switch (action.type) {
    case DoctorProfileMeAction.types.progress:
      state.DoctorProfileData = [];
      return DoctorProfileState.isFetching(state);

    case DoctorProfileMeAction.types.success:
      return DoctorProfileState.success(state, action);

    case DoctorProfileMeAction.types.failure:
      return DoctorProfileState.failure(state, action);

    default:
      return state;
  }
};

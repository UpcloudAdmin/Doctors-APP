import { getCollegeListAction } from "../action/Collegelist";
import { getStateOfRemoteData } from "./includes";

const getCollegeListState = getStateOfRemoteData(
  "CollegeListStateSuccess",
  "CollegeListStateFailure",
  "CollegeListStateFetching",
  "CollegeListStateData",
  "CollegeListStateError"
);

export const CollegeListReducer = (
  state = {
    ...getCollegeListState.initial(),
  },
  action = {}
) => {
  switch (action.type) {
    case getCollegeListAction.types.progress:
      state.CollegeListStateData = [];
      return getCollegeListState.isFetching(state);
    case getCollegeListAction.types.success:
      return getCollegeListState.success(state, action);
    case getCollegeListAction.types.failure:
      return getCollegeListState.failure(state, action);

    default:
      return state;
  }
};

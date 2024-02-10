import { getAddBankAccountAction } from "../action/addBankAccount";
import { getStateOfRemoteData } from "./includes";

const getAddBankAccountState = getStateOfRemoteData(
  "AddBankAccountSuccess",
  "AddBankAccountFailure",
  "AddBankAccountFetching",
  "AddBankAccountData",
  "AddBankAccountError"
);

export const AddBankAccountReducer = (
  state = {
    ...getAddBankAccountState.initial(),
  },
  action = {}
) => {
  switch (action.type) {
    case getAddBankAccountAction.types.progress:
      state.AddBankAccountData = [];
      return getAddBankAccountState.isFetching(state);
    case getAddBankAccountAction.types.success:
      return getAddBankAccountState.success(state, action);
    case getAddBankAccountAction.types.failure:
      return getAddBankAccountState.failure(state, action);

    default:
      return state;
  }
};

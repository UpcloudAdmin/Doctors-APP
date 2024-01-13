import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginReducer } from "./Login";
import { DoctorProfileReducer } from "./DoctorProfile";
import { SignUpReducer } from "./Signup";
import { verifyContactStateReducer } from "./VerifyContact";
import { RequestOtpReducer } from "./RequestOtp";
import { DoctorProfileMeReducer } from "./doctorProfileMe";
import {CollegeListReducer} from "./Collegelist"
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const GlobalReducer = combineReducers({
  LoginReducer,
  SignUpReducer,
  verifyContactStateReducer,
  RequestOtpReducer,
  DoctorProfileReducer,
  DoctorProfileMeReducer,
  CollegeListReducer,
});

const rootReducer = (state, action) => {
  if (action?.type === "LOGOUT_CLEAR_START") {
    state = undefined;
  }
  return GlobalReducer(state, action);
};
export default persistReducer(persistConfig, rootReducer);

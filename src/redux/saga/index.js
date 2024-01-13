import { all } from "redux-saga/effects";
import { watchLoginRequest } from "./Login";
import { watchSignUpRequest } from "./Signup";
import { watchVerifyRequest } from "./VerifyContact";
import { watchDoctorProfileRequest } from "./DoctorProfile";
import { watchDoctorProfileMeRequest } from "./doctorProfileMe";
import { watchCollegeListRequest } from "./Collegelist";

function* rootSaga() {
  yield all([
    watchDoctorProfileRequest(),
    watchLoginRequest(),
    watchSignUpRequest(),
    watchVerifyRequest(),
    watchDoctorProfileMeRequest(),
    watchCollegeListRequest(),
  ]);
}

export default rootSaga;

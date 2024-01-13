export const login = () => "user/login";
export const signup = () => "user/signup";
export const verifyContact = () => "user/verifycontact";
export const requestOtp = () => "user/requestotp";
export const doctorProfile = () => "user/doctor/me";

export const doctorCollegeList = () => "doctorlist/collegelist";
export const specialityList = () => "doctorlist/specialitylist";
export const memberShipList = () => "doctorlist/membershiplist";

export const getDoctorProfile = (query) => `user/doctor/${query}`;

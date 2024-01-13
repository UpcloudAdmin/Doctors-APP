//Access_token ;
export const getToken = (state) => {
  if (
    state?.rootReducer?.LoginReducer?.LoginData?.access_token !==
    undefined
  )
    return state?.rootReducer?.LoginReducer?.LoginData?.access_token;
  return undefined;
};

//User_Id ;
export const getUserId = (state) => {
  if (
    state?.rootReducer?.LoginReducer?.LoginData?.userInfo?._id !==
    undefined
  )
    return state?.rootReducer?.LoginReducer?.LoginData?.userInfo?._id;
  return undefined;
};


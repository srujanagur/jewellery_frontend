// import {
//   DeleteUser,
//   GetallUsers,
//   LoginUser,
//   LogoutUser,
//   RegisterUser,
// } from "../../Types/userTypes";

// export function getAllUsers(users: string[]): GetallUsers {
//   return {
//     type: "GETALL_USERS",
//     payload: users,
//   };
// }
// export function loginUser(email: string, password: string): LoginUser {
//   return {
//     type: "LOGIN_USER",
//     payload: {
//       email,
//       password,
//     },
//   };
// }
// export function logoutUser(username: string): LogoutUser {
//   return {
//     type: "LOGOUT_USER",
//     payload: username,
//   };
// }
// export function deleteUser(username: string): DeleteUser {
//   return {
//     type: "DELETE_USER",
//     payload: username,
//   };
// }
// export function registerUser(
//   username: string,
//   firstName: string,
//   lastName: string,
//   email: string,
//   password: string,
//   confirmpassword: string
// ): RegisterUser {
//   return {
//     type: "REGISTER_USER",
//     payload: {
//       email,
//       username,
//       password,
//       firstName,
//       lastName,
//       confirmpassword,
//     },
//   };
// }

import { Dispatch } from "redux";

export function userLogin(idtoken: string) {
  alert("You Logged in Successfull");
  console.log("response" + JSON.stringify(idtoken));

  return (dispatch: Dispatch) => {
    dispatch({
      type: "LOG_IN",
      payload: idtoken,
    });
  };
}

export function userLogout(logoutStatus: string) {
  alert("You Logged out Successfull");
  return (dispatch: Dispatch) => {
    dispatch({
      type: "LOG_OUT",
      payload: logoutStatus,
    });
  };
}
export function storingToken(accessToken: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "STORING_TOKEN",
      payload: accessToken,
    });
  };
}

// export const LOGIN_USER = "LOGIN_USER";
// export const LOGOUT_USER = "LOGOUT_USER";
// export const REGISTER_USER = "REGISTER_USER";
// export const GETALL_USERS = "GETALL_USERS";
// export const DELETE_USER = "DELETE_USER";
// export type User = {
//   users: string[];
//   username: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmpassword: string;
// };

// export type LoginUser = {
//   type: "LOGIN_USER";
//   payload: {
//     email: string;
//     password: string;
//   };
// };
// export type LogoutUser = {
//   type: "LOGOUT_USER";
//   payload: string;
// };
// export type RegisterUser = {
//   type: "REGISTER_USER";
//   payload: {
//     username: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
//     confirmpassword: string;
//   };
// };
// export type GetallUsers = {
//   type: "GETALL_USERS";
//   payload: string[];
// };
// export type DeleteUser = {
//   type: "DELETE_USER";
//   payload: string;
// };

// export type UserActions =
//   | LoginUser
//   | LogoutUser
//   | RegisterUser
//   | GetallUsers
//   | DeleteUser;

export enum ActionType {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
  STORING_TOKEN = "STORING_TOKEN",
}

export type LoginAction = {
  type: "LOG_IN";
  payload: string;
};

export type StoringToken = {
  type: "STORING_TOKEN";
  payload: string;
};

export type LogoutAction = {
  type: "LOG_OUT";
  payload: string;
};

export type UserActions = LoginAction | LogoutAction | StoringToken;

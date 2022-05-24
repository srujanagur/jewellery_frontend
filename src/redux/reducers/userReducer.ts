// // import { lighttheme } from "../../components/Themes/Theme";

// import { User, UserActions } from "../../Types/userTypes";

// const initialState: InitialState = {
//   users: [],
//   username: "",
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   confirmpassword: "",
// };
// export type InitialState = {
//   users: User[];
//   username: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmpassword: string;
// };

// export default function userReducer(
//   state = initialState,
//   action: UserActions
// ): InitialState {
//   switch (action.type) {
//     case "LOGIN_USER": {
//       return {
//         ...state,
//       };
//     }
//     case "LOGOUT_USER": {
//       return {
//         ...state,
//       };
//     }
//     case "REGISTER_USER": {
//       return {
//         ...state,
//       };
//     }
//     case "GETALL_USERS": {
//       return {
//         ...state,
//       };
//     }
//     case "DELETE_USER":
//       return {
//         ...state,
//       };

//     default:
//       return state;
//   }
// }

import { UserActions } from "../../Types/userTypes";

export type User = {
  username: string;
  userType: string;
  isAdminApproved: boolean;
};
export type InitialState = {
  users: User[];
  showLoginButton: number;
  showLogoutButton: number;
  activeUser: string;
  existingUser: number;
  idtoken: string;
};

const initialState: InitialState = {
  users: [],
  showLoginButton: 1,
  showLogoutButton: 0,
  activeUser: "",
  existingUser: 0,
  idtoken: "",
};

const userReducer = (
  state: InitialState = initialState,
  action: UserActions
): InitialState => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        activeUser: "assumedUser",
        showLoginButton: 0,
        showLogoutButton: 1,
        idtoken: action.payload,
      };
    case "LOG_OUT":
      let user_results2 = state.users.filter(
        (user) => user.username === action.payload
      );
      let assumedUser2 = "badUser";
      let existingUserStatus2 = 0;
      console.log(user_results2);
      if (user_results2.length > 0) {
        existingUserStatus2 = 1;
        assumedUser2 = user_results2[0].username;
      }

      return {
        ...state,
        activeUser: assumedUser2,

        showLoginButton: 1,
        showLogoutButton: 0,
        existingUser: existingUserStatus2,
      };
    case "STORING_TOKEN":
      return {
        ...state,
        idtoken: action.payload,
        showLoginButton: 0,
        showLogoutButton: 0,
      };

    default:
      return state;
  }
};

export default userReducer;

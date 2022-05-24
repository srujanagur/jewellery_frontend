import { combineReducers } from "redux";

import productReducer from "./productReducer";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";
import { orderReducer } from "./orderReducer";

const rootReducer = combineReducers({
  productReducer,
  userReducer,
  themeReducer,
  orderReducer,
});
export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;

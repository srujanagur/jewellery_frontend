import { ThemeActions } from "../../Types/themeTypes";

export type InitialState = {
  theme: string;
};
const initialState: InitialState = {
  theme: "light",
};
export default function themeReducer(
  state = initialState,
  action: ThemeActions
): InitialState {
  switch (action.type) {
    case "SWITCH_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

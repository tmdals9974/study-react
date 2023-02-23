import { createReducer, createSetValueAction, setValueReducer } from "../../common/redux-helper";

//#region Types
export const Types = {
  SetValue: "search/SetValue",
  FetchUser: "user/FetchUser",
};
//#endregion

//#region Actions
export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchUser: (name) => ({ type: Types.FetchUser, name }),
};
//#endregion

//#region Reducer
const INITIAL_STATE = {
  user: undefined,
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});

export default reducer;
//#endregion

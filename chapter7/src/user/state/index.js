import { createReducer, createSetValueAction, FETCH_KEY, setValueReducer } from "../../common/redux-helper";

//#region Types
export const Types = {
  SetValue: "search/SetValue",
  FetchUser: "user/FetchUser",
  FetchUpdateUser: "user/FetchUpdateUser",
};
//#endregion

//#region Actions
export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchUser: (name) => ({ type: Types.FetchUser, name }),
  fetchUpdateUser: ({ user, key, value, fetchKey }) => ({
    type: Types.FetchUpdateUser,
    user,
    key,
    value,
    [FETCH_KEY]: fetchKey,
  }),
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

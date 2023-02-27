import { createReducer, createSetValueAction, FETCH_KEY, setValueReducer } from "../../common/redux-helper";

//#region Types
export const Types = {
  SetValue: "search/SetValue",
  FetchUser: "user/FetchUser",
  FetchUpdateUser: "user/FetchUpdateUser",
  FetchUserHistory: "user/FetchUserHistory",
  AddHistory: "user/AddHistory",
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
  fetchUserHistory: (name) => ({ type: Types.FetchUserHistory, name }),
  addHistory: (history) => ({ type: Types.AddHistory, history }),
};
//#endregion

//#region Reducer
const INITIAL_STATE = {
  user: undefined,
  userHistory: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
  [Types.AddHistory]: (state, action) => (state.userHistory = [action.history, ...state.userHistory]),
});

export default reducer;
//#endregion

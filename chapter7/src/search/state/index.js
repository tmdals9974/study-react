import { createReducer, createSetValueAction, setValueReducer } from "../../common/redux-helper";

//#region Types
export const Types = {
  SetValue: "search/SetValue",
  FetchAutoComplete: "search/FetchAutoComplete",
};
//#endregion

//#region Actions
export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchAutoComplete: (keyword) => ({
    type: Types.FetchAutoComplete,
    keyword,
  }),
};
//#endregion

//#region Reducer
const INITIAL_STATE = {
  keyword: "",
  autoCompletes: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});

export default reducer;
//#endregion

import produce from "immer";

function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_SELECTED_PEOPLE:
        draft.selectedPeople = action.id;
        break;
      case EDIT_PEOPLE_NAME:
        const people = draft.peopleList.find((item) => item.id === action.id);
        people.name = action.name;
        break;
      default:
        break;
    }
  });
}

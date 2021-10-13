import { csrfFetch } from "./csrf";

const SET_ID = "id/setId";

const setId = (ids) => ({ type: SET_ID, ids });

export const updateId = (ids) => async (dispatch) => {
  dispatch(setId(ids));
};

export default function idReducer(
  state = { typeId: null, stateId: null, cityId: null },
  action
) {
  let newState;
  switch (action.type) {
    case SET_ID:
      newState = { ...action.ids };
      return newState;
    default:
      return state;
  }
}

import { csrfFetch } from "./csrf";

const SET_TYPE = "type/setTypes";

const setTypes = (types) => ({ type: SET_TYPE, types });

export const getTypes = () => async (dispatch) => {
  const res = await csrfFetch(`/api/business-types`);
  const types = await res.json();
  dispatch(setTypes(types));
};

export default function typeReducer(state = null, action) {
  let newState;
  switch (action.type) {
    case SET_TYPE:
      newState = { ...action.types };
      return newState;
    default:
      return state;
  }
}

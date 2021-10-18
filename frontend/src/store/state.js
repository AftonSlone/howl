import { csrfFetch } from "./csrf";

const SET_STATE = "id/setId";

const setStates = (states) => ({ type: SET_STATE, states });

export const getStates = () => async (dispatch) => {
  const res = await csrfFetch("/api/states");
  const states = await res.json();
  dispatch(setStates(states));
};

export default function stateReducer(state = null, action) {
  let newState;
  switch (action.type) {
    case SET_STATE:
      newState = { ...action.states };
      return newState;
    default:
      return state;
  }
}

import { csrfFetch } from "./csrf";

const SET_CITY = "city/setCity";

const setCities = (cities) => ({ type: SET_CITY, cities });

export const getCities = (stateId) => async (dispatch) => {
  const res = await csrfFetch(`/api/cities/state/${stateId}`);
  const cities = await res.json();
  dispatch(setCities(cities));
};

export default function cityReducer(state = null, action) {
  let newState;
  switch (action.type) {
    case SET_CITY:
      newState = { ...action.cities };
      return newState;
    default:
      return state;
  }
}

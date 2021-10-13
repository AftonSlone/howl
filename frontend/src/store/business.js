import { csrfFetch } from "./csrf";

const SET_BUSINESS = "business/setBusiness";

const setBusiness = (business) => ({ type: SET_BUSINESS, business });

export const search = (ids) => async (dispatch) => {
  const { typeId, stateId, cityId } = ids;
  let url = "/api/business";
  if (typeId) url += `/type/${typeId}`;
  if (stateId) url += `/state/${stateId}`;
  if (cityId) url += `/city/${cityId}`;
  const res = await csrfFetch(url);
  const data = await res.json();
  dispatch(setBusiness(data));
};

export default function businessReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_BUSINESS:
      newState = { ...state, ...action.business };
      return newState;
    default:
      return state;
  }
}

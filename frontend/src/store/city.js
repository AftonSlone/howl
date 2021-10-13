// import { csrfFetch } from "./csrf";

// const SET_CITY = "city/setCity";

// const setCities = (cities) => ({ type: SET_CITY, cities });

// export const getCities = (state) => async (dispatch) => {
//   const res = await csrfFetch("/api/cities");
//   const cities = res.json();
//   dispatch(setStates(cities));
// };

// export default function idReducer(state = {}, action) {
//   let newState;
//   switch (action.type) {
//     case SET_STATE:
//       newState = { ...action.cities };
//       return newState;
//     default:
//       return state;
//   }
// }

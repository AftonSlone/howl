import { csrfFetch } from "./csrf";

const SET_BUSINESS = "business/setBusiness";
// const REMOVE_USER = "session/removeUser";

// const setUser = (user) => ({ type: SET_USER, user });
const setBusiness = (business) => ({ type: SET_BUSINESS, business });

// const removeUser = () => ({ type: REMOVE_USER });

// export const login = (user) => async (dispatch) => {
//   const { credential, password } = user;
//   try {
//     const res = await csrfFetch("/api/session", {
//       method: "POST",
//       body: JSON.stringify({ credential, password }),
//     });

//     const data = await res.json();
//     dispatch(setUser(data.user));
//     return data;
//   } catch (errors) {
//     const error = errors.json();
//     return error;
//   }
// };

export const search = (searchObj) => async (dispatch) => {
  const res = await csrfFetch("/api/business", {
    body: JSON.stringify(searchObj),
  });
  const data = await res.json();
  dispatch(setBusiness(data));
};

// export const signup = (user) => async (dispatch) => {
//   const { username, email, password, businessAccount } = user;
//   const res = await csrfFetch("/api/users", {
//     method: "POST",
//     body: JSON.stringify({ username, email, password, businessAccount }),
//   });
//   const data = await res.json();
//   dispatch(setUser(data.user));
//   return res;
// };

// export const logout = () => async (dispatch) => {
//   const res = await csrfFetch("/api/session", {
//     method: "DELETE",
//   });
//   dispatch(removeUser());
//   return res;
// };

// export const restoreUser = () => async (dispatch) => {
//   const res = await csrfFetch("/api/session");
//   const data = await res.json();
//   dispatch(setUser(data.user));
//   return data;
// };

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

import { csrfFetch } from "./csrf";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => ({ type: SET_USER, user });

const removeUser = () => ({ type: REMOVE_USER });

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  try {
    const res = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ credential, password }),
    });

    const data = await res.json();
    dispatch(setUser(data.user));
    return data;
  } catch (errors) {
    const error = errors.json();
    return error;
  }
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password, businessAccount } = user;
  try {
    const res = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password, businessAccount }),
    });
    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
  } catch (errors) {
    const error = await errors.json();
    return error;
  }
};

export const logout = () => async (dispatch) => {
  const res = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return res;
};

export const restoreUser = () => async (dispatch) => {
  const res = await csrfFetch("/api/session");
  const data = await res.json();
  dispatch(setUser(data.user));
  return data;
};

export default function sessionReducer(state = { user: null }, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = { ...state, user: action.user ? { ...action.user } : null };
      return newState;
    case REMOVE_USER:
      newState = { ...state, user: null };
      return newState;
    default:
      return state;
  }
}

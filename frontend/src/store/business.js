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

  const sortBusiness = (businesses) => {
    const reviewScore = (business) => {
      let count = 0;
      business.Reviews.forEach((review) => {
        count += review.rating;
      });
      return count / business.Reviews.length;
    };

    const helperFunc = (a, b) => {
      if (reviewScore(a) > reviewScore(b)) return -1;
      if (reviewScore(a) < reviewScore(b)) return 1;
      return 0;
    };

    businesses.sort(helperFunc);
  };

  sortBusiness(data);

  dispatch(setBusiness(data));
};

export const newBusiness = (business) => async (dispatch) => {
  const res = await csrfFetch("/api/business", {
    method: "POST",
    body: JSON.stringify(business),
  });

  const data = await res.json();
  dispatch(setBusiness(data));
};

export default function businessReducer(state = null, action) {
  let newState;
  switch (action.type) {
    case SET_BUSINESS:
      newState = { ...state, ...action.business };
      return newState;
    default:
      return state;
  }
}

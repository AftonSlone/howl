import { csrfFetch } from "./csrf";

const SET_BUSINESS = "business/setBusiness";
const SET_SELECTED_BUSINESS = "business/setSelectedBusiness";

const setBusiness = (business) => ({ type: SET_BUSINESS, business });

const setSelectedBusiness = (business) => ({
  type: SET_SELECTED_BUSINESS,
  business,
});

export const editReviews = (review) => async (dispatch) => {
  const { reviewId, userId, rating, text } = review;
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "PUT",
    body: JSON.stringify({ userId, rating, text }),
  });
};

export const postReviews = (review) => async (dispatch) => {
  try {
    const res = await csrfFetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify(review),
    });

    const data = await res.json();
    return data;
  } catch (errors) {
    const error = errors.json();

    return error;
  }
};

export const deleteReviews = (ids) => async (dispatch) => {
  const { id, userId } = ids;
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ userId }),
  });
};

export const fetchBusinesses = (ids) => async (dispatch) => {
  const { typeId, stateId, cityId, ownerId, businessId } = ids;
  let url = "/api/business";
  if (businessId) url += `/${businessId}`;
  if (ownerId) url += `/user/${ownerId}`;
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

  if (data.length > 1) sortBusiness(data);

  dispatch(setBusiness(data));
};

export const fetchBusiness = (businessId) => async (dispatch) => {
  const res = await csrfFetch(`/api/business/${businessId}`);
  const data = await res.json();
  dispatch(setSelectedBusiness(data));
};

export const newBusiness = (business) => async (dispatch) => {
  try {
    const res = await csrfFetch("/api/business", {
      method: "POST",
      body: JSON.stringify(business),
    });

    const data = await res.json();
    dispatch(setBusiness(data));
    return data;
  } catch (errors) {
    const error = errors.json();

    return error;
  }
};

export const editBusiness = (business) => async (dispatch) => {
  try {
    const { businessId } = business;
    const res = await csrfFetch(`/api/business/${businessId}`, {
      method: "PUT",
      body: JSON.stringify(business),
    });

    const data = await res.json();
    // dispatch(setBusiness(data));
    return data;
  } catch (errors) {
    const error = errors.json();

    return error;
  }
};

export default function businessReducer(
  state = { businesses: [], selectedBusiness: null },
  action
) {
  let newState;
  switch (action.type) {
    case SET_BUSINESS:
      newState = { ...state, businesses: action.business };
      return newState;
    case SET_SELECTED_BUSINESS:
      newState = { ...state, selectedBusiness: action.business };
      return newState;
    default:
      return state;
  }
}

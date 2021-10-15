import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { csrfFetch } from "../../store/csrf";
import { search, fetchBusiness } from "../../store/business";

import Navigation from "../Navigation";

export default function Business() {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const currentBusiness = useSelector(
    (state) => state.business.selectedBusiness
  );
  console.log(currentBusiness);
  const user = useSelector((state) => state.session.user);
  const ids = useSelector((state) => state.id);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("dog122");
  const [errors, setErrors] = useState(null);

  const editReview = async (e) => {
    const res = await csrfFetch(`/api/reviews/${e.target.id}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: user.id,
        rating,
        text,
      }),
    });

    if (Object.values(ids).length) {
      dispatch(search(ids));
    } else {
      dispatch(search({ businessId }));
    }
    setErrors(res.errors);
  };

  const deleteReview = async (e) => {
    const res = await csrfFetch(`/api/reviews/${e.target.id}`, {
      method: "DELETE",
      body: JSON.stringify({ userId: user.id }),
    });

    if (Object.values(ids).length) {
      dispatch(search(ids));
    } else {
      dispatch(search({ businessId }));
    }
    setErrors(res.errors);
  };

  const postReview = async () => {
    const res = await csrfFetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({
        userId: user.id,
        businessId,
        rating,
        text,
      }),
    });

    if (Object.values(ids).length) {
      dispatch(search(ids));
    } else {
      dispatch(search({ businessId }));
    }
    setErrors(res.errors);
  };

  useEffect(async () => {
    await dispatch(fetchBusiness(businessId));
  }, [dispatch, businessId]);

  if(!currentBusiness || !user) return "Loading..."
  return (
    <div>
      <Navigation />
      {currentBusiness.name}
      {currentBusiness.Reviews.map((review) => (
          <div key={review.id}>
            <h2>{review.text}</h2>
            <p>{review.rating}</p>
            {user.id === review.userId ? (
              <button id={review.id} onClick={editReview}>
                Edit
              </button>
            ) : null}
            {user.id === review.userId ? (
              <button id={review.id} onClick={deleteReview}>
                Delete
              </button>
            ) : null}
          </div>
        ))}
      <button onClick={postReview}>New Review</button>
    </div>
  );
}

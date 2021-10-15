import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchBusiness,
  deleteReviews,
  postReviews,
  editReviews,
} from "../../store/business";

import Navigation from "../Navigation";

export default function Business() {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const currentBusiness = useSelector(
    (state) => state.business.selectedBusiness
  );
  const user = useSelector((state) => state.session.user);
  const ids = useSelector((state) => state.id);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("dog133");
  const [errors, setErrors] = useState(null);

  const editReview = async (e) => {
    const newReview = {
      userId: user.id,
      rating,
      text,
      reviewId: e.target.id,
    };
    await dispatch(editReviews(newReview));
    dispatch(fetchBusiness(businessId));
  };

  const deleteReview = async (e) => {
    await dispatch(deleteReviews({ userId: user.id, id: e.target.id }));
    dispatch(fetchBusiness(businessId));
  };

  const postReview = async () => {
    const newReview = {
      userId: user.id,
      businessId,
      rating,
      text,
    };

    await dispatch(postReviews(newReview));

    dispatch(fetchBusiness(businessId));
  };

  useEffect(async () => {
    await dispatch(fetchBusiness(businessId));
  }, [dispatch, businessId]);

  if (!currentBusiness || !user) return "Loading...";
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

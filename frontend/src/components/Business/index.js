import "./Business.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchBusiness,
  deleteReviews,
  postReviews,
  editReviews,
} from "../../store/business";

import Header from "../Header";

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

  const reviewScore = (business) => {
    let count = 0;
    business.Reviews.forEach((review) => {
      count += review.rating;
    });
    return count / business.Reviews.length;
  };

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

  if (!currentBusiness) return "Loading...";
  return (
    <div className="businessWrapper">
      <Header />
      <div className="businessBanner"></div>
      <div className="businessContent">
        <h2>{currentBusiness.name}</h2>
        <div className="businessCardReviewScore">
          <div
            className={`businessCardReviewScoreIcon ${
              1 <= reviewScore(currentBusiness)
            }`}
          >
            <i className="fas fa-star"></i>{" "}
          </div>
          <div
            className={`businessCardReviewScoreIcon ${
              2 <= reviewScore(currentBusiness)
            }`}
          >
            <i className="fas fa-star"></i>
          </div>
          <div
            className={`businessCardReviewScoreIcon ${
              3 <= reviewScore(currentBusiness)
            }`}
          >
            <i className="fas fa-star"></i>
          </div>
          <div
            className={`businessCardReviewScoreIcon ${
              4 <= reviewScore(currentBusiness)
            }`}
          >
            <i className="fas fa-star"></i>
          </div>
          <div
            className={`businessCardReviewScoreIcon ${
              5 === reviewScore(currentBusiness)
            }`}
          >
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="businessCardAddress">
          {currentBusiness.BusinesType.name} - {currentBusiness.City.name},{" "}
          {currentBusiness.State.name}
        </div>
        <div className="businessLocationHours">
          <h2>{`Location & Hours`}</h2>
          <p>Sun: {currentBusiness.Hour.sunday}</p>
          <p>Mon: {currentBusiness.Hour.monday}</p>
          <p>Tue: {currentBusiness.Hour.tuesday}</p>
          <p>Wed: {currentBusiness.Hour.wednesday}</p>
          <p>Thu: {currentBusiness.Hour.thursday}</p>
          <p>Fri: {currentBusiness.Hour.friday}</p>
          <p>Sat: {currentBusiness.Hour.saturday}</p>
        </div>
        <div className="businessAbout">
          <h2>{`About the Business`}</h2>
          <p>{currentBusiness.info}</p>
        </div>
      </div>
      {/* {currentBusiness.name}
      {currentBusiness.Reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.text}</h2>
          <p>{review.rating}</p>
          {user && user.id === review.userId ? (
            <button
              className="HeaderBtnSignup"
              id={review.id}
              onClick={editReview}
            >
              Edit
            </button>
          ) : null}
          {user && user.id === review.userId ? (
            <button
              className="HeaderBtnSignup"
              id={review.id}
              onClick={deleteReview}
            >
              Delete
            </button>
          ) : null}
        </div>
      ))}
      <button className="HeaderBtnSignup" onClick={postReview}>
        New Review
      </button>
    </div> */}
    </div>
  );
}

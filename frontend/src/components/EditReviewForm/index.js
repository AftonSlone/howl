import "./EditReviewForm.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStates } from "../../store/state";
import { getTypes } from "../../store/type";
import { getCities } from "../../store/city";
import { fetchBusiness, editReviews } from "../../store/business";

export default function EditReviewForm({ setEditReviewModal, review }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const currentBusiness = useSelector(
    (state) => state.business.selectedBusiness
  );

  window.onclick = (e) => {
    if (e.target.className === "modalWrapper") setEditReviewModal(false);
  };

  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [stateId] = useState(null);
  const [counter, setCounter] = useState(0);
  const [errors, setErrors] = useState([]);

  const handleRating = (value) => {
    setRating(value);
    setCounter(value);
  };

  useEffect(() => {
    dispatch(getStates());
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    if (stateId) dispatch(getCities(stateId));
  }, [dispatch, stateId]);

  useEffect(() => {
    if (review) {
      setText(review.text);
      setRating(review.rating);
    }
  }, [review]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const userId = user.id;
    const businessId = currentBusiness.id;
    const reviewId = review.id;
    const res = await dispatch(
      editReviews({ userId, businessId, reviewId, rating, text })
    );

    if (res.errors) {
      const result = [];
      res.errors.forEach((err) => {
        if (err !== "Invalid value") result.push(err);
      });
      setErrors(result);
    }
    if (!res.errors) {
      setEditReviewModal(false);
      dispatch(fetchBusiness(businessId));
    }
  };
  return (
    <form onSubmit={handleSubmit} className="newBusinessForm">
      <ul className="errorsContainer">
        {errors.map((err) => (
          <li className="error" key={err}>
            {err}
          </li>
        ))}
      </ul>
      <textarea
        value={text}
        className="reviewText"
        placeholder="Review Info"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="reviewRatingContainer">
        <div
          onMouseLeave={() => setCounter(0)}
          onMouseOver={() => setCounter(1)}
          onClick={() => handleRating(1)}
          className={`reviewScoreIcon review${counter < 1 && rating < 1}`}
        >
          <i className="fas fa-star"></i>
        </div>
        <div
          onMouseLeave={() => setCounter(0)}
          onMouseOver={() => setCounter(2)}
          onClick={() => handleRating(2)}
          className={`reviewScoreIcon review${counter < 2 && rating < 2}`}
        >
          <i className="fas fa-star"></i>
        </div>
        <div
          onMouseLeave={() => setCounter(0)}
          onMouseOver={() => setCounter(3)}
          onClick={() => handleRating(3)}
          className={`reviewScoreIcon review${counter < 3 && rating < 3}`}
        >
          <i className="fas fa-star"></i>
        </div>
        <div
          onMouseLeave={() => setCounter(0)}
          onMouseOver={() => setCounter(4)}
          onClick={() => handleRating(4)}
          className={`reviewScoreIcon review${counter < 4 && rating < 4}`}
        >
          <i className="fas fa-star"></i>
        </div>
        <div
          onMouseLeave={() => setCounter(0)}
          onMouseOver={() => setCounter(5)}
          onClick={() => handleRating(5)}
          className={`reviewScoreIcon review${counter < 5 && rating < 5}`}
        >
          <i className="fas fa-star"></i>
        </div>
      </div>

      <div className="signupBtnContainer">
        <button className="HeaderBtnSignup">Submit</button>
        <button
          className="HeaderBtnSignup"
          onClick={() => setEditReviewModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

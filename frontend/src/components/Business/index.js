import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { csrfFetch } from "../../store/csrf";
import { search } from "../../store/business";

export default function Business() {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const business = useSelector((state) => state.business);
  const user = useSelector((state) => state.session.user);
  const ids = useSelector((state) => state.id);
  const [currentBusiness, setCurrentBusiness] = useState(null);
  const [rating, setRating] = useState(null);
  const [text, setText] = useState("");
  const [errors, setErrors] = useState(null);

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

    dispatch(search(ids));
    setErrors(res.errors);
  };

  useEffect(() => {
    const findBusiness = () => {
      for (let key in business) {
        let value = business[key];
        if (value.id === +businessId) setCurrentBusiness(value);
      }
    };

    if (business) findBusiness();
  }, [business, businessId]);

  return (
    <div>
      <h1>Hello</h1>
      {currentBusiness && currentBusiness.name}
      {currentBusiness &&
        currentBusiness.Reviews.map((review) => (
          <div key={review.id}>
            <h2>{review.text}</h2>
            <p>{review.rating}</p>
          </div>
        ))}
      <button onClick={postReview}>New Review</button>
    </div>
  );
}

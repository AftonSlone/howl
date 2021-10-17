import "./NewReviewForm.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/session";
import { getStates } from "../../store/state";
import { getTypes } from "../../store/type";
import { getCities } from "../../store/city";
import { newBusiness } from "../../store/business";

export default function NewReviewForm({ setReviewModal }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const states = useSelector((state) => state.state);
  const cities = useSelector((state) => state.city);
  const types = useSelector((state) => state.type);

  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [loc, setLoc] = useState("");
  const [stateId, setStateId] = useState(null);
  const [cityId, setCityId] = useState(null);
  const [street, setStreet] = useState("");
  const [info, setInfo] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getStates());
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    if (stateId) dispatch(getCities(stateId));
  }, [dispatch, stateId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setErrors([]);
    // const ownerId = user.id;
    // const res = await dispatch(
    //   newBusiness({ name, typeId, loc, stateId, cityId, ownerId, street, info })
    // );

    // if (res.errors) {
    //   const result = [];
    //   res.errors.forEach((err) => {
    //     if (err !== "Invalid value") result.push(err);
    //   });
    //   setErrors(result);
    // }
    // if (!res.errors) setBusinessModal(false);
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
          <div className="reviewScoreIcon"><i className="fas fa-star"></i></div>
          <div className="reviewScoreIcon"><i className="fas fa-star"></i></div>
          <div className="reviewScoreIcon"><i className="fas fa-star"></i></div>
          <div className="reviewScoreIcon"><i className="fas fa-star"></i></div>
          <div className="reviewScoreIcon"><i className="fas fa-star"></i></div>
      </div>


      <div className="signupBtnContainer">
        <button className="HeaderBtnSignup">Submit</button>
        <button
          className="HeaderBtnSignup"
          onClick={() => setReviewModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

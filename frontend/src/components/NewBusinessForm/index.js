import "./NewBusinessForm.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStates } from "../../store/state";
import { getTypes } from "../../store/type";
import { getCities } from "../../store/city";
import { newBusiness } from "../../store/business";

export default function NewBusinessForm({ setBusinessModal }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const states = useSelector((state) => state.state);
  const cities = useSelector((state) => state.city);
  const types = useSelector((state) => state.type);

  const [name, setName] = useState("");
  const [typeId, setTypeId] = useState("");
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
    setErrors([]);
    const ownerId = user.id;
    const res = await dispatch(
      newBusiness({ name, typeId, loc, stateId, cityId, ownerId, street, info })
    );

    if (res.errors) {
      const result = [];
      res.errors.forEach((err) => {
        if (err !== "Invalid value") result.push(err);
      });
      setErrors(result);
    }
    if (!res.errors) setBusinessModal(false);
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
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <select
        name="typeId"
        className="newbusinessTypeBtn"
        onChange={(e) => setTypeId(e.target.value)}
      >
        <option>Business Type</option>
        {types &&
          Object.values(types).map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
      </select>

      <input
        type="text"
        value={loc}
        placeholder="Location"
        onChange={(e) => setLoc(e.target.value)}
      />

      <select
        name="stateId"
        className="newbusinessTypeBtn"
        onChange={(e) => setStateId(e.target.value)}
      >
        <option>State</option>
        {states &&
          Object.values(states).map((state) => (
            <option key={state.id} value={state.id}>
              {state.name}
            </option>
          ))}
      </select>

      <select
        name="cityId"
        className="newbusinessTypeBtn"
        onChange={(e) => setCityId(e.target.value)}
      >
        <option>City</option>
        {cities &&
          Object.values(cities).map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
      </select>

      <input
        type="text"
        value={street}
        placeholder="Street"
        onChange={(e) => setStreet(e.target.value)}
      />

      <textarea
        value={info}
        placeholder="Business Info"
        className="newBusinessInfo"
        onChange={(e) => setInfo(e.target.value)}
      />

      <div className="signupBtnContainer">
        <button className="HeaderBtnSignup">Submit</button>
        <button
          className="HeaderBtnSignup"
          onClick={() => setBusinessModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

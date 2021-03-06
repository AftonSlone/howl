import "./Homepage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStates } from "../../store/state";
import { getCities } from "../../store/city";
import { getTypes } from "../../store/type";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import Navigation from "../Navigation";

export default function Homepage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [typeId, setTypeId] = useState(null);
  const [stateId, setStateId] = useState(null);
  const [cityId, setCityId] = useState(null);
  const states = useSelector((state) => state.state);
  const cities = useSelector((state) => state.city);
  const types = useSelector((state) => state.type);

  useEffect(() => {
    dispatch(getStates());
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    if (stateId) dispatch(getCities(stateId));
  }, [dispatch, stateId]);

  const handleSearch = () => {
    let url = "/business";
    if (typeId) url += `/type/${typeId}`;
    if (stateId) url += `/state/${stateId}`;
    if (cityId) url += `/city/${cityId}`;
    history.push(url);
  };

  return (
    <div className="homepage">
      <Container fluid id="testing">
        <Row>
          <Navigation />
        </Row>
        <Row className="justify-content-center">
              <img
                className="HeaderLogo1"
                src="https://i.imgur.com/SzFAJOX.png"
                alt=""
              />
        </Row>
        <Row className="justify-content-center">
            <select
              name="typeId"
              id="typeId"
              className="businessTypeBtn left"
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
            <select
              name="stateId"
              id="stateId"
              className="businessTypeBtn"
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
              id="cityId"
              className="businessTypeBtn"
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
            <button className="searchBtn" onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
        </Row>
      </Container>
      <div className="homepageContent">
        {/* <div className="homepageLinks">Links</div> */}
      </div>
    </div>
  );
}

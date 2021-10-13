import "./Homepage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateId } from "../../store/id";
import { useHistory } from "react-router-dom";

import { getStates } from "../../store/state";
import Navigation from "../Navigation";

export default function Homepage() {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [typeId, setTypeId] = useState(null);
  // const [stateId, setStateId] = useState(null);
  // const [cityId, setCityid] = useState(null);
  const states = useSelector((state) => state.state);

  useEffect(() => {
    console.log("Ping");
    dispatch(getStates());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(updateId({ typeId: 1, stateId: 5, cityId: 1 }));
    history.push("/results");
  };

  return (
    <div className="homepage">
      <div className="navWrapper">
        <Navigation />
      </div>
      <div className="homepageContent">
        <div className="homepageLogo">Img</div>
        <div className="homepageSearchWrapper">
          <button onClick={handleSearch}>Search</button>
          <select name="typeId" id="typeId">
            <option>Null</option>
          </select>
          <select name="stateId" id="stateId">
            {Object.values(states).length &&
              Object.values(states).map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
          </select>
        </div>
        <div className="homepageLinks">Links</div>
      </div>
    </div>
  );
}

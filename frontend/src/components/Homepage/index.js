import "./Homepage.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateId } from "../../store/id";
import { useHistory } from "react-router-dom";

import Navigation from "../Navigation";

export default function Homepage() {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [typeId, setTypeId] = useState(null);
  // const [stateId, setStateId] = useState(null);
  // const [cityId, setCityid] = useState(null);

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
        </div>
        <div className="homepageLinks">Links</div>
      </div>
    </div>
  );
}

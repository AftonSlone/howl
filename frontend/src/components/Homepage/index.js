import "./Homepage.css";

import { useDispatch } from "react-redux";
import { search } from "../../store/business";
import Navigation from "../Navigation";

export default function Homepage() {
  const dispatch = useDispatch();
  return (
    <div className="homepage">
      <div className="navWrapper">
        <Navigation />
      </div>
      <div className="homepageContent">
        <div className="homepageLogo">Img</div>
        <div className="homepageSearchWrapper">
          <button
            onClick={() => {
              dispatch(
                search({
                  type: "gym",
                  city: "san francisco",
                  state: "California",
                })
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="homepageLinks">Links</div>
      </div>
    </div>
  );
}

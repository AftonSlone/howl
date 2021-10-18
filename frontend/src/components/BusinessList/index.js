import "./BusinessList.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses } from "../../store/business";

import Header from "../Header";
import BusinessCard from "../BusinessCard";

export default function BusinessList() {
  const dispatch = useDispatch();
  const ids = useParams();
  const business = useSelector((state) => state.business.businesses);

  useEffect(() => {
    console.log(ids)
    dispatch(fetchBusinesses(ids));
  }, [dispatch, ids]);

  return (
    <div>
      <Header />
      <div className="businessListContentWrapper">
        <div className="businessListContent">
          <h1 className="businessListH1">Results</h1>
          {business.map((card) => (
            <BusinessCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

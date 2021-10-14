import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Business() {
  const { businessId } = useParams();
  const business = useSelector((state) => state.business);
  const [currentBusiness, setCurrentBusiness] = useState(null);

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
    </div>
  );
}

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { csrfFetch } from "../../store/csrf";
import { search } from "../../store/business";

export default function Profile() {
  const dispatch = useDispatch();
  const business = useSelector((state) => state.business);
  const user = useSelector((state) => state.session.user);
  const [currentBusiness, setCurrentBusiness] = useState(null);

  useEffect(() => {
    const findBusiness = () => {
      const result = [];
      for (let key in business) {
        let value = business[key];
        if (value.ownerId === user.id) result.push(value);
      }
      setCurrentBusiness(result);
    };

    if (business) findBusiness();

    if (!business) dispatch(search({ ownerId: user.id }));
  }, [business, user]);

  return (
    <div>
      {currentBusiness &&
        currentBusiness.map((business) => (
          <Link key={business.id} to={`/business/${business.id}`}>
            {business.name}
          </Link>
        ))}
    </div>
  );
}

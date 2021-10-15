import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchBusinesses } from "../../store/business";

export default function Profile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const business = useSelector((state) => state.business.businesses);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchBusinesses({ownerId: userId}));
  }, [business, user]);
  if (!business || !user) return "Loading...";
  return (
    <div>
      {business &&
        business.map((business) => (
          <Link key={business.id} to={`/business/${business.id}`}>
            {business.name}
          </Link>
        ))}
    </div>
  );
}

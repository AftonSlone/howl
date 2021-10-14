import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/business";

export default function BusinessList() {
  const dispatch = useDispatch();
  const ids = useSelector((state) => state.id);
  let business = useSelector((state) => state.business);

  const reviewScore = (business) => {
    let count = 0;
    business.Reviews.forEach((review) => {
      count += review.rating;
    });
    return count / business.Reviews.length;
  };

  useEffect(() => {
    dispatch(search(ids));
  }, [dispatch, ids]);
  return (
    <div>
      {business &&
        Object.values(business).map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/business/${item.id}`}>{item.name}</Link>
              <p>
                {reviewScore(item)} : {item.Reviews.length}
              </p>
            </div>
          );
        })}
    </div>
  );
}

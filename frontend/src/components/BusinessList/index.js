import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/business";

export default function BusinessList() {
  const dispatch = useDispatch();
  const ids = useParams()
  const business = useSelector((state) => state.business.businesses);

  const reviewScore = (business) => {
    let count = 0;
    business.Reviews.forEach((review) => {
      count += review.rating;
    });
    return count / business.Reviews.length;
  };

  useEffect(() => {
    console.log(ids)
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
                {reviewScore(item) ? reviewScore(item) : 0} :{" "}
                {item.Reviews.length}
              </p>
            </div>
          );
        })}
    </div>
  );
}

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/business";

export default function BusinessList() {
  const dispatch = useDispatch();
  const ids = useSelector((state) => state.id);
  const data = useSelector((state) => state.business);
  const business = Object.entries(data);
  console.log(business);

  useEffect(() => {
    dispatch(search(ids));
  }, [dispatch]);
  return (
    <div>
      {business.length &&
        business.map((item) => {
          const loc = JSON.parse(item.loc);
          return (
            <div>
              <p>{item.name}</p>
              <p>{item.info}</p>
              <p>{loc.lat}</p>
              <p>{loc.lng}</p>
            </div>
          );
        })}
    </div>
  );
}

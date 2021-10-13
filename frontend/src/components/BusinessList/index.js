import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../store/business";

export default function BusinessList() {
  const dispatch = useDispatch();
  const ids = useSelector((state) => state.id);
  const business = useSelector((state) => state.business);

  useEffect(() => {
    dispatch(search(ids));
  }, [dispatch]);
  return (
    <div>
      {Object.values(business).length &&
        Object.values(business).map((item) => {
          const loc = JSON.parse(item.loc);
          return (
            <div key={item.id}>
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

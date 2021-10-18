import "./BusinessCard.css";
import { useHistory } from "react-router-dom";

export default function BusinessCard({ data }) {
  const history = useHistory();
  const icon = () => {
    if (data.typeId === 1) return <i className="fas fa-utensils"></i>;
    if (data.typeId === 2) return <i className="fas fa-car"></i>;
    if (data.typeId === 3) return <i className="fas fa-shopping-cart"></i>;
    if (data.typeId === 4) return <i className="fas fa-dumbbell"></i>;
    if (data.typeId === 5) return <i className="fas fa-glass-whiskey"></i>;
  };

  const reviewScore = (business) => {
    let count = 0;
    business.Reviews.forEach((review) => {
      count += review.rating;
    });
    return count / business.Reviews.length;
  };

  return (
    <div
      onClick={(e) => history.push(`/business/${data.id}`)}
      className="businessCardWrapper"
    >
      <div className="businessCardIcon">{icon()}</div>
      <div className="businessCardContent">
        <h2>{data.name}</h2>
        <div className="businessCardReviewScore">
          <div
            className={`businessCardReviewScoreIcon ${1 <= reviewScore(data)}`}
          >
            <i className="fas fa-star"></i>{" "}
          </div>
          <div
            className={`businessCardReviewScoreIcon ${2 <= reviewScore(data)}`}
          >
            <i className="fas fa-star"></i>
          </div>
          <div
            className={`businessCardReviewScoreIcon ${3 <= reviewScore(data)}`}
          >
            <i className="fas fa-star"></i>
          </div>
          <div
            className={`businessCardReviewScoreIcon ${4 <= reviewScore(data)}`}
          >
            <i className="fas fa-star"></i>
          </div>
          <div
            className={`businessCardReviewScoreIcon ${5 === reviewScore(data)}`}
          >
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="businessCardAddress">
          {data.BusinesType.name} - {data.City.name}, {data.State.name}
        </div>
        <div className="businessCardReviewText">
          {data.Reviews[0] && data.Reviews[0].text}
        </div>
      </div>
    </div>
  );
}

import "./BusinessCard.css";

export default function BusinessCard({ data }) {
  const icon = () => {
    return <i class="fas fa-utensils"></i>;
  };

  const reviewScore = (business) => {
    let count = 0;
    business.Reviews.forEach((review) => {
      count += review.rating;
    });
    return count / business.Reviews.length;
  };

  return (
    <div className="businessCardWrapper">
      <div className="businessCardIcon">{icon()}</div>
      <div className="businessCardContent">
        <h2>{data.name}</h2>
        <div className="businessCardReviewScore">
          <div className={`businessCardReviewScoreIcon ${1 <= reviewScore(data)}`}>
            <i class="fas fa-star"></i>{" "}
          </div>
          <div className={`businessCardReviewScoreIcon ${2 <= reviewScore(data)}`}>
            <i class="fas fa-star"></i>
          </div>
          <div className={`businessCardReviewScoreIcon ${3 <= reviewScore(data)}`}>
            <i class="fas fa-star"></i>
          </div>
          <div className={`businessCardReviewScoreIcon ${4 <= reviewScore(data)}`}>
            <i class="fas fa-star"></i>
          </div>
          <div
            className={`businessCardReviewScoreIcon ${5 === reviewScore(data)}`}
          >
            <i class="fas fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

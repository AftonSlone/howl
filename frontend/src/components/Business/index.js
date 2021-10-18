import "./Business.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBusiness, deleteReviews } from "../../store/business";

import Header from "../Header";
import EditReviewForm from "../EditReviewForm";
import Modal from "../Modal";

export default function Business() {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const currentBusiness = useSelector(
    (state) => state.business.selectedBusiness
  );
  const user = useSelector((state) => state.session.user);
  const [editReviewModal, setEditReviewModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const getTypeName = () => {
    if (currentBusiness.typeId === 1) return "one";
    if (currentBusiness.typeId === 2) return "two";
    if (currentBusiness.typeId === 3) return "three";
    if (currentBusiness.typeId === 4) return "four";
    if (currentBusiness.typeId === 5) return "five";
  };

  const handleEditReview = (id) => {
    console.log(currentBusiness.Reviews);
    const result = currentBusiness.Reviews.find((item) => item.id === +id);
    console.log(result);
    setSelectedReview(result);
    setEditReviewModal(true);
  };

  const reviewScore = (business) => {
    let count = 0;
    business.Reviews.forEach((review) => {
      count += review.rating;
    });
    return count / business.Reviews.length;
  };

  const deleteReview = async (e) => {
    await dispatch(deleteReviews({ userId: user.id, id: e.target.id }));
    dispatch(fetchBusiness(businessId));
  };

  useEffect(async () => {
    await dispatch(fetchBusiness(businessId));
  }, [dispatch, businessId]);

  if (!currentBusiness) return "Loading...";
  return (
    <div className="businessWrapper">
      <Header />
      <div className={`businessBanner ${getTypeName()}`}></div>
      <div className="businessContent">
        <h2>{currentBusiness.name}</h2>
        <div className="businessCardReviewScore">
          <div
            className={`businessCardReviewScoreIcon ${
              1 <= reviewScore(currentBusiness)
            }`}
          >
            <i className="fas fa-star"></i>
          </div>
          <div
            className={`businessCardReviewScoreIcon ${
              2 <= reviewScore(currentBusiness)
            }`}
          >
            <i className="fas fa-star"></i>
          </div>
          <div
            className={`businessCardReviewScoreIcon ${
              3 <= reviewScore(currentBusiness)
            }`}
          >
            <i className="fas fa-star"></i>
          </div>
          <div
            className={`businessCardReviewScoreIcon ${
              4 <= reviewScore(currentBusiness)
            }`}
          >
            <i className="fas fa-star"></i>
          </div>
          <div
            className={`businessCardReviewScoreIcon ${
              5 === reviewScore(currentBusiness)
            }`}
          >
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="businessCardAddress">
          {currentBusiness.BusinesType.name} - {currentBusiness.City.name},{" "}
          {currentBusiness.State.name}
        </div>
        {currentBusiness.Hour && (
          <div className="businessLocationHours">
            <h2>{`Location & Hours`}</h2>
            <p>Sun: {currentBusiness.Hour.sunday}</p>
            <p>Mon: {currentBusiness.Hour.monday}</p>
            <p>Tue: {currentBusiness.Hour.tuesday}</p>
            <p>Wed: {currentBusiness.Hour.wednesday}</p>
            <p>Thu: {currentBusiness.Hour.thursday}</p>
            <p>Fri: {currentBusiness.Hour.friday}</p>
            <p>Sat: {currentBusiness.Hour.saturday}</p>
          </div>
        )}
        <div className="businessAbout">
          <h2>{`About the Business`}</h2>
          <p>{currentBusiness.info}</p>
        </div>
        <div className="businessReviews">
          <h2>{`Reviews`}</h2>
          <div className="businessReviewsContent">
            {currentBusiness.Reviews.map((review) => (
              <div>
                <div className="businessReviewScore">
                  <div
                    className={`businessReviewScoreIcon ${1 <= review.rating}`}
                  >
                    <i className="fas fa-star"></i>{" "}
                  </div>
                  <div
                    className={`businessReviewScoreIcon ${2 <= review.rating}`}
                  >
                    <i className="fas fa-star"></i>
                  </div>
                  <div
                    className={`businessReviewScoreIcon ${3 <= review.rating}`}
                  >
                    <i className="fas fa-star"></i>
                  </div>
                  <div
                    className={`businessReviewScoreIcon ${4 <= review.rating}`}
                  >
                    <i className="fas fa-star"></i>
                  </div>
                  <div
                    className={`businessReviewScoreIcon ${5 === review.rating}`}
                  >
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p>{review.text}</p>
                <div className="businessReviewsBtnContainer">
                  {user && user.id === review.userId ? (
                    <button
                      className="businessBtn"
                      id={review.id}
                      onClick={(e) => handleEditReview(e.target.id)}
                    >
                      Edit
                    </button>
                  ) : null}
                  {user && user.id === review.userId ? (
                    <button
                      className="businessBtn"
                      id={review.id}
                      onClick={deleteReview}
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {editReviewModal && (
        <Modal
          component={EditReviewForm}
          setEditReviewModal={setEditReviewModal}
          review={selectedReview}
        />
      )}
    </div>
  );
}

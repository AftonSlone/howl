import "./Profile.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchBusiness, fetchBusinesses } from "../../store/business";
import BusinessCard from "../BusinessCard";
import EditBusinessForm from "../EditBusinessForm";
import Header from "../Header";
import Modal from "../Modal";

export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const business = useSelector((state) => state.business.businesses);
  const user = useSelector((state) => state.session.user);

  const [editBusinessModal, setEditBusinessModal] = useState(false);

  const handleEdit = async (id) => {
    console.log(id);
    console.log("ping");
    await dispatch(fetchBusiness(id));
    setEditBusinessModal(true);
  };

  useEffect(() => {
    if (!user) history.push("/");
    dispatch(fetchBusinesses({ ownerId: userId }));
  }, [editBusinessModal, user, dispatch, history, userId]);
  if (!business || !user) return "Loading...";
  return (
    <div>
      <Header />
      <div className="businessListContentWrapper">
        <div className="businessListContent">
          <h1 className="businessListH1">Results</h1>
          {business.map((card) => (
            <div className="profileCardWrapper">
              <BusinessCard
                key={card.id}
                data={card}
                setEditBusinessModal={setEditBusinessModal}
              />
              <button
                className="businessBtn"
                id={card.id}
                onClick={(e) => handleEdit(e.target.id)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
      {editBusinessModal && (
        <Modal
          component={EditBusinessForm}
          setEditBusinessModal={setEditBusinessModal}
        />
      )}
    </div>
  );
}

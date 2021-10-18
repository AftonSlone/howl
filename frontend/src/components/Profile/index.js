import "./Profile.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  deleteBusiness,
  fetchBusiness,
  fetchBusinesses,
} from "../../store/business";
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
    await dispatch(fetchBusiness(id));
    setEditBusinessModal(true);
  };

  const handleDelete = async (id) => {
    await dispatch(deleteBusiness(id));
    await dispatch(fetchBusinesses({ ownerId: userId }));
  };

  useEffect(() => {
    dispatch(fetchBusinesses({ ownerId: userId }));
  }, [dispatch, userId]);

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
            <div key={card.id} className="profileCardWrapper">
              <BusinessCard
                key={card.id}
                data={card}
                setEditBusinessModal={setEditBusinessModal}
              />
              <div className="profileBtnContainer">
                <button
                  className="businessBtn"
                  id={card.id}
                  onClick={(e) => handleEdit(e.target.id)}
                >
                  Edit
                </button>
                <button
                  className="businessBtn"
                  id={card.id}
                  onClick={(e) => handleDelete(e.target.id)}
                >
                  Delete
                </button>
              </div>
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

import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/session";
import ProfileButton from "../Navigation/ProfileButton";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
import NewBusinessForm from "../NewBusinessForm";
import NewReviewForm from "../NewReviewForm";
import Menu from "../Navigation/Menu";
import Modal from "../Modal";

export default function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const currentBusiness = useSelector(
    (state) => state.business.selectedBusiness
  );
  const [clicked, setClicked] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [businessModal, setBusinessModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);

  window.onclick = (e) => {
    if (e.target.className !== "fas fa-user") setClicked(false);
    if (e.target.className === "modalWrapper") {
      setLoginModal(false);
      setBusinessModal(false);
      setSignupModal(false);
      setReviewModal(false);
    }
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="HeaderContainer">
      <div>
        <NavLink to="/">
          <img
            className="HeaderLogo"
            src="https://i.imgur.com/SzFAJOX.png"
            alt=""
          />
        </NavLink>
      </div>
      <div className="HeaderBtnContainer">
        {!user && (
          <div className="HeaderBtn" onClick={() => setLoginModal(true)}>
            Login
          </div>
        )}
        {!user && (
          <div className="HeaderBtnSignup" onClick={() => setSignupModal(true)}>
            Signup
          </div>
        )}
        {!user && (
          <div
            className="HeaderBtnSignup"
            onClick={() => {
              dispatch(login({ credential: "demo", password: "password" }));
            }}
          >
            Demo
          </div>
        )}
        {user && user.businessAccount ? (
          <button
            className="HeaderBtnSignup"
            onClick={() => setBusinessModal(true)}
          >
            New Business
          </button>
        ) : null}

        {user && currentBusiness && user ? (
          <button
            className="HeaderBtnSignup"
            onClick={() => setReviewModal(true)}
          >
            Write a Review
          </button>
        ) : null}
        {user && <ProfileButton handleClick={handleClick} />}
      </div>
      {clicked && <Menu user={user} />}
      {loginModal && (
        <Modal component={LoginFormPage} setLoginModal={setLoginModal} />
      )}
      {signupModal && (
        <Modal component={SignupFormPage} setSignupModal={setSignupModal} />
      )}
      {businessModal && (
        <Modal
          component={NewBusinessForm}
          setBusinessModal={setBusinessModal}
        />
      )}
      {reviewModal && (
        <Modal component={NewReviewForm} setReviewModal={setReviewModal} />
      )}
    </nav>
  );
}

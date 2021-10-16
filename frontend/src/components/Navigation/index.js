import "./Navigation.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/session";
import { newBusiness } from "../../store/business";

import ProfileButton from "./ProfileButton";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
import Modal from "../Modal";
import Menu from "./Menu";
import NewBusinessForm from "../NewBusinessForm";


export default function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [clicked, setClicked] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [businessModal, setBusinessModal] = useState(false);

  window.onclick = (e) => {
    if (e.target.className !== "fas fa-user") setClicked(false);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="navContainer">
      <div className="NavBtnContainer">
        {!user && (
          <div className="navBtn" onClick={() => setLoginModal(true)}>
            Login
          </div>
        )}
        {!user && (
          <div
            className="navBtn navBtnSignup"
            onClick={() => setSignupModal(true)}
          >
            Signup
          </div>
        )}
        {!user && (
          <div
            className="navBtn navBtnSignup"
            onClick={() => {
              dispatch(login({ credential: "demo", password: "password" }));
            }}
          >
            Demo
          </div>
        )}
        {user && user.businessAccount ? (
          <button
            className="navBtn navBtnSignup"
            onClick={() => setBusinessModal(true)}
          >
            New Business
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
    </nav>
  );
}

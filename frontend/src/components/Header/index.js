import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/session";
import { newBusiness } from "../../store/business";
import ProfileButton from "../Navigation/ProfileButton";
import LoginFormPage from "../Navigation/LoginFormPage";
import SignupFormPage from "../Navigation/SignupFormPage";
import Menu from "../Navigation/Menu";

export default function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [clicked, setClicked] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  window.onclick = (e) => {
    if (e.target.className !== "fas fa-user") setClicked(false);
  };

  const postNewBusiness = async () => {
    const business = {
      name: "dog pile",
      typeId: 2,
      ownerId: 1,
      loc: "",
      cityId: 1,
      stateId: 5,
      street: "102 puppy",
      info: "This is nothing but a test",
    };
    dispatch(newBusiness(business));
  };

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="HeaderContainer">
      <div>
        <NavLink to="/">
          <img className="HeaderLogo" src="https://i.imgur.com/SzFAJOX.png" />
        </NavLink>
      </div>
      <div className="HeaderBtnContainer">
        {!user && (
          <div className="HeaderBtn" onClick={() => setLoginModal(true)}>
            Login
          </div>
        )}
        {!user && (
          <div
            className="HeaderBtn HeaderBtnSignup"
            onClick={() => setSignupModal(true)}
          >
            Signup
          </div>
        )}
        {!user && (
          <div
            className="HeaderBtn HeaderBtnSignup"
            onClick={() => {
              dispatch(login({ credential: "demo", password: "password" }));
            }}
          >
            Demo
          </div>
        )}
        {user && user.businessAccount ? (
          <button className="HeaderBtn" onClick={postNewBusiness}>
              New Business
          </button>
        ) : null}
        {user && <ProfileButton handleClick={handleClick} />}
      </div>
      {clicked && <Menu user={user} />}
      {loginModal && <LoginFormPage setLoginModal={setLoginModal} />}
      {signupModal && <SignupFormPage setSignupModal={setSignupModal} />}
    </nav>
  );
}

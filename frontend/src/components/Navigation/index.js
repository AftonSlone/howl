import "./Navigation.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/session";
import { newBusiness } from "../../store/business";
import ProfileButton from "./ProfileButton";
import LoginFormPage from "./LoginFormPage";
import SignupFormPage from "./SignupFormPage";
import Menu from "./Menu";

export default function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [clicked, setClicked] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  window.onclick = (e) => {
    if (e.target.className !== "fas fa-user") setClicked(false);
  };

  const postNewBusiness = () => {
    const business = {
      name: "dog pile",
      typeId: 2,
      ownerId: 1,
      loc: JSON.stringify({ lat: 34, lng: 55 }),
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
    <nav className="navContainer">
      {/* <NavLink to="/"><img className='navLogo' src='https://i.imgur.com/SzFAJOX.png' /></NavLink> */}
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
      {clicked && <Menu user={user} />}
      {loginModal && <LoginFormPage setLoginModal={setLoginModal} />}
      {signupModal && <SignupFormPage setSignupModal={setSignupModal} />}
      {user && user.businessAccount ? (
        <button onClick={postNewBusiness}>Post New Business</button>
      ) : null}
      {user && <ProfileButton handleClick={handleClick} />}
    </nav>
  );
}

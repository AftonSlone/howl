import "./Navigation.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/session";
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
        <div className="navBtn navBtnSignup" onClick={() => setSignupModal(true)}>
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
      {user && <ProfileButton handleClick={handleClick} />}
    </nav>
  );
}

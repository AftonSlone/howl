import "./Navigation.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/session";
import ProfileButton from "./ProfileButton";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
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
      <NavLink to="/">Home</NavLink>
      {!user && <button>Login</button>}
      {!user && <button>Signup</button>}
      {!user && (
        <button
          onClick={() => {
            dispatch(login({ credential: "demo", password: "password" }));
          }}
        >
          Demo
        </button>
      )}
      {clicked && <Menu user={user} />}
      {loginModal && <LoginFormPage />}
      {signupModal && <SignupFormPage />}
      {user && <ProfileButton handleClick={handleClick} />}
    </nav>
  );
}

import "./Navigation.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import Menu from "./Menu";

export default function Navigation() {
  const user = useSelector((state) => state.session.user);
  const [clicked, setClicked] = useState(false);

  window.onclick = (e) => {
     if (e.target.className !== "fas fa-user") setClicked(false);
   };

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="navContainer">
      <NavLink to="/">Home</NavLink>
      {!user && <NavLink to="/login">Login</NavLink>}
      {!user && <NavLink to="/signup">Signup</NavLink>}
      {clicked && <Menu user={user} />}
      {user && <ProfileButton handleClick={handleClick} />}
    </nav>
  );
}

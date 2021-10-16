import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/session";

export default function Menu({ user }) {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await dispatch(logout());
  };
  return (
    <div className="menuContainer">
      <div className="username">{user.username}</div>
      <Link className="HeaderBtnSignup" to={`/user/${user.id}`}>
        Manage Businesses
      </Link>
      <button className="HeaderBtnSignup" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

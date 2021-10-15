import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/session";

export default function Menu({ user }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="menuContainer">
      <div>{user.username}</div>
      <Link to={`/user/${user.id}`}>Manage Businesses</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

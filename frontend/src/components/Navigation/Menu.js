import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

export default function Menu({ user }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="menuContainer">
      <div>{user.username}</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

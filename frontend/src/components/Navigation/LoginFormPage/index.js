import "./LoginForm.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/session";
import { Redirect } from "react-router";

export default function LoginFormPage({ setLoginModal }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (user) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(login({ credential, password }));
    setErrors(res.errors);
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <ul className="errorsContainer">
        {errors.map((err) => (
          <li className="error" key={err}>
            {err}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={credential}
        placeholder="Username or Email"
        onChange={(e) => setCredential(e.target.value)}
      />

      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="loginBtnContainer">
        <button className="HeaderBtnSignup">Log In</button>
        <button
          className="HeaderBtnSignup"
          onClick={() => setLoginModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

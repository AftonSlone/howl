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
      <ul>
        {errors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </ul>
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div className="loginBtnContainer">
        <button>Log In</button>
        <button onClick={() => setLoginModal(false)}>Cancel</button>
      </div>
    </form>
  );
}

import "./NewBusinessForm.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../store/session";
import { Redirect } from "react-router";

export default function NewBusinessForm({ setSignupModal }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [businessAccount, setBusinessAccount] = useState(false);

  if (user) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (password === confirmPassword) {
      dispatch(signup({ username, email, password, businessAccount })).catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      );
    } else {
      setErrors(["Passwords must match"]);
    }
  };
  return (
    <div className="signupFormWrapper">
      <form onSubmit={handleSubmit} className="signupForm">
        <ul>
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <label>
          Confirm Password
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <p>Is this a Business Account?</p>
        <div className="signupCheckboxContainer">
          <span>
            Yes
            <input
              type="checkbox"
              name="businessAccount"
              value={true}
              checked={businessAccount === true}
              onChange={(e) => setBusinessAccount(true)}
            />
          </span>
          <span>
            No
            <input
              type="checkbox"
              name="businessAccount"
              value={false}
              checked={businessAccount === false}
              onChange={(e) => setBusinessAccount(false)}
            />
          </span>
        </div>
        <div className="signupBtnContainer">
          <button>Sign Up</button>
          <button onClick={() => setSignupModal(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

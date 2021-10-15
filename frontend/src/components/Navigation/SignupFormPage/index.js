import "./SignupForm.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../store/session";
import { Redirect } from "react-router";

export default function SignupFormPage({ setSignupModal }) {
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
    <form onSubmit={handleSubmit} className="signupForm">
      <ul>
        {errors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </ul>

      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        value={confirmPassword}
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
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
        <button className="HeaderBtnSignup">Sign Up</button>
        <button
          className="HeaderBtnSignup"
          onClick={() => setSignupModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

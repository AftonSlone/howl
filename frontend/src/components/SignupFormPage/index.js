import "./SignupForm.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/session";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (password === confirmPassword) {
      const res = await dispatch(
        signup({ username, email, password, businessAccount })
      );
      if (res.errors) {
        const result = [];
        res.errors.forEach((err) => {
          if (err !== "Invalid value") result.push(err);
        });
        setErrors(result);
      }
      if (!res.errors) {
        setSignupModal(false);
      }
    } else {
      setErrors(["Passwords must match"]);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="signupForm">
      <ul className="errorsContainer">
        {errors.map((err) => (
          <li className="error" key={err}>
            {err}
          </li>
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
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        value={confirmPassword}
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <p>Is this a Business Account?</p>
      <div className="signupCheckboxContainer">
        <div className="yes">
          <p>Yes</p>
          <input
            type="checkbox"
            name="businessAccount"
            value={true}
            checked={businessAccount === true}
            onChange={(e) => setBusinessAccount(true)}
          />
        </div>
        <div className="no">
          <p>No</p>
          <input
            type="checkbox"
            name="businessAccount"
            value={false}
            checked={businessAccount === false}
            onChange={(e) => setBusinessAccount(false)}
          />
        </div>
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

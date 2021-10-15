import LoginFormPage from "../Navigation/LoginFormPage";
import SignupFormPage from "../Navigation/SignupFormPage";

export default function index({
  signupModal,
  setSignupModal,
  loginModal,
  setLoginModal,
}) {
  if (loginModal)
    return (
      <div className="loginFormWrapper">
        <LoginFormPage setLoginModal={setLoginModal} />;
      </div>
    );

  if (signupModal)
    return (
      <div className="signupFormWrapper">
        <SignupFormPage setSignupModal={setSignupModal} />;
      </div>
    );
  return <h1>Loading....</h1>;
}

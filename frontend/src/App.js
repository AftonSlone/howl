import { Switch, Route } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { restoreUser } from "./store/session";

import LoginFormPage from "./components/Navigation/LoginFormPage";
import SignupFormPage from "./components/Navigation/SignupFormPage";
import Homepage from "./components/Homepage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser());
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;

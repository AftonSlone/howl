import { Switch, Route } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { restoreUser } from "./store/session";

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
      </Switch>
    </>
  );
}

export default App;

import { Switch, Route } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { restoreUser } from "./store/session";

import Homepage from "./components/Homepage";
import BusinessList from "./components/BusinessList";
import Business from "./components/Business";

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
        <Route path="/results">
          <BusinessList />
        </Route>
        <Route path="/business/:businessId">
          <Business />
        </Route>
      </Switch>
    </>
  );
}

export default App;

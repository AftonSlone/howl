import { Switch, Route } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { restoreUser } from "./store/session";

import Homepage from "./components/Homepage";
import BusinessList from "./components/BusinessList";
import Business from "./components/Business";
import Profile from "./components/Profile";

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
        <Route path="/business/type/:typeId/state/:stateId/ctiy/:cityId">
          <BusinessList />
        </Route>
        <Route path="/business/type/:typeId/state/:stateId">
          <BusinessList />
        </Route>
        <Route path="/business/type/:typeId">
          <BusinessList />
        </Route>
        <Route path="/business/state/:stateId/ctiy/:cityId">
          <BusinessList />
        </Route>
        <Route path="/business/state/:stateId">
          <BusinessList />
        </Route>
        <Route path="/business/:businessId">
          <Business />
        </Route>
        <Route path="/user/:userId">
          <Profile />
        </Route>
      </Switch>
    </>
  );
}

export default App;

import { Router, Switch, Route, Redirect } from "react-router-dom";
import { BrandsPage } from "./components/BrandsPage";
import { BrandsList } from "./components/BrandsList";

import { ErrorPage } from "./components/ErrorPage";
import { history } from "./utils/history";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/phones" />
        </Route>
        <Route exact path="/phones">
          <BrandsPage />
        </Route>
        <Route path={`/phones/:brand`}>
          <BrandsList />
        </Route>
        <Route exact path="/error">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { BrandList } from "./components/BrandList";
import { BrandPage } from "./components/BrandPage";
import { BRANDS } from "./utils/apiUrls";
import { getData } from "./utils/api";

const App = () => {
  const [isLoading, setLoader] = useState(false);
  const [brands, setBrands] = useState({});

  useEffect(() => {
    getData(BRANDS, setBrands);
  }, []);

  return (
    <Router>
      <h1>List</h1>
      <Switch>
        <Route exact path="/">
          <Redirect to="/phones" />
        </Route>
        <Route exact path="/phones">
          <BrandList items={brands.options} />
        </Route>
        <Route path={`/phones/:brand`}>
          <BrandPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

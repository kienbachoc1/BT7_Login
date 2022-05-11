import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import SignUp from "./pages/Register/SignUp";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import HomeTemplate from "./templates/HomeTemplate";
import Product from "./pages/Product/Product";
import Detail from "./pages/Detail/Detail";
export const history = createBrowserHistory();

function App(props) {
  return (
    <Router history={history} className="App">
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <SignUp />
        </Route>
        <HomeTemplate exact path="/home" Component={Home} title="Home" />
        <HomeTemplate exact path="/about" Component={About} title="About" />
        <HomeTemplate
          exact
          path="/product"
          Component={Product}
          title="Product"
        />
        <HomeTemplate
          exact
          path="/detail/:id"
          Component={Detail}
          title="Detail"
        />
      </Switch>
    </Router>
  );
}

export default App;

import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import SignUp from "./pages/Register/SignUp";
import Home from "./pages/Home/Home";
export const history = createBrowserHistory();

function App(props) {
  return (
    <Router history={history} className="App">
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

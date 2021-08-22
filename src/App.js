import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboard";
import Cashier from "./Components/Cashier";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AdminDashboard} />
        <Route exact path="/cashier" component={Cashier} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

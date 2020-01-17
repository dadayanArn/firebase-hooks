import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import Login from './screens/Login';
import Links from './screens/Links';
import LinkList from './screens/LinkList';
import Register from './screens/Register';
import './styles/forms.styles.css'
import useAuth from "./components/Auth/useAuth";


function App() {
  useAuth();
  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <Router>
        <Switch>
          <Route path="/linklist">
            <LinkList />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/link">
            <Links />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

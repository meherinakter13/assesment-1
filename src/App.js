import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Registration from "./component/Registration/Registration";

function App() {
  return (
    <Router>
      <Header></Header>
     <Switch>
          <Route path="/registration">
            <Registration/>
          </Route>
          {/* <Route exact path="/">
            <Home></Home>
          </Route> */}
          <Route path="/post">
            <Home/>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;

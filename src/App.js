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

function App() {
  return (
    <Router>
      <Header></Header>
     <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/post">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;

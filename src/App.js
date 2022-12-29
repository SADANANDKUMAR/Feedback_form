import React from 'react';
import './App.css';
import Feedback from './Feedback';
//import { Routes, Route } from "react-router-dom"
// import { BrowserRouter, Switch,Routes, Route, Link } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar'
import Navfunc from './Nabbarf';
function App() {



  return (

    <>
      <Router>
      <Switch>
        <Route  path='/feedback' ><Feedback/> </Route>
        {/* <Route path='/nav' ><Navbar/></Route> */}
     
        <Route path='/func'><Navfunc/> <Navfunc/> <Navfunc/> <Navfunc/> </Route>
        {/* <Route  path='/feedback/:id' ><Feedback/> </Route> */}
        <Route path="*" > <><center><h5>Sorry!!....<b>Page Note Found</b></h5></center></></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;

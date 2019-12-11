import React, { Component } from "react";
import "./App.css";
import Age from "./Components/Age"
import Task2 from "./Components/Task2";
import Task3 from "./Components/Task3";
import Task4 from "./Components/Task4";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Task5 from "./Components/Task5";
import Task6 from "./Components/Task6";

class App extends Component {
  render() {
    return (
    <div className="App">
    <Router> 
      <switch>
      <Route exact path='/' component={Age}></Route>
      <Route exact path='/Task2' component={Task2}></Route>
      <Route exact path='/Task3' component={Task3}></Route>
      <Route exact path='/Task4' component={Task4}></Route>
      <Route exact path='/Task5' component={Task5}></Route> 
      <Route exact path='/Task6' component={Task6}></Route> 
       
      
      </switch>
   </Router>
    </div>
    );
  }
}
export default App;
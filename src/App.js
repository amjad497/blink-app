// import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Calendar from './components/Calendar/Calendar'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Assignments from './components/Assignments/Assignments';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Assignments" component={Assignments} />
        <Route path="/Calendar" component={Calendar} />
      </Router>
    </div>
  )
}

export default App
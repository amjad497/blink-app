// import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Login from './student/pages/Login/Login';
import Signup from './student/pages/Signup/Signup';
import Dashboard from './student/pages/Dashboard/Dashboard';
import CourseRegistration from './student/pages/CourseRegistration/CourseRegistration';
import Attendance from './student/pages/Attendance/Attendance';
import Media from './student/pages/Media/Media';
import Assignments from './student/pages/Assignments/Assignments';
import Quiz from './student/pages/Quiz/Quiz';
import Whiteboard from './student/pages/Whiteboard/Whiteboard';
import AcademicReport from './student/pages/AcademicReport/AcademicReport';
import FeeChallan from './student/pages/FeeChallan/FeeChallan';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/CourseRegistration" component={CourseRegistration} />
        <Route path="/Attendance" component={Attendance} />
        <Route path="/Media" component={Media} />
        <Route path="/Assignments" component={Assignments} />
        <Route path="/Quiz" component={Quiz} />
        <Route path="/Whiteboard" component={Whiteboard} />
        <Route path="/AcademicReport" component={AcademicReport} />
        <Route path="/FeeChallan" component={FeeChallan} />
      </Router>
    </div>
  )
}

export default App
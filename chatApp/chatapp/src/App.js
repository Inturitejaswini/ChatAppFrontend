import React, { Component } from 'react';
import './App.css';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './pages/registration';
import ResetPassword from './pages/resetPassword';
import Dashboard from './components/dashboard'
import UsersList from './components/usersList'
function App() {
    return (
      <div className="App">
            {/* <Route path='/' exact component={Login}></Route> */}
            <Route path='/login' component={Login}></Route>
            <Route path='/registration' component={Registration}></Route>
            <Route path='/resetPassword' component={ResetPassword}></Route>
            <Route path='/' component={Dashboard}></Route>
            <Switch>
            <Route path='/usersList' component={UsersList}></Route>
          </Switch>
       </div>
    )
  }

export default App;

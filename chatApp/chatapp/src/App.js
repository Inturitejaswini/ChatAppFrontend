import React, { Component } from 'react';
import './App.css';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './pages/registration';
import ResetPassword from './pages/resetPassword';
import NavBar from './components/nav'
import UsersList from './components/usersList'
function App() {
  return (
    <div className="App">
        {/* <Route path='/' exact component={Login}></Route> */}
        <Route path='/login' component={Login}></Route>
        <Route path='/registration' component={Registration}></Route>
        <Route path='/resetPassword' component={ResetPassword}></Route>
        <Route path='/' component={NavBar}/>
        <Switch>
          <Route exact path='/' component={UsersList}/>
        </Switch>
        {/* <h1>hello world</h1> */}
    </div>
  )
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './pages/registration';
import ResetPassword from './pages/resetPassword';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact component={Login}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/registration' component={Registration}></Route>
            <Route path='/resetPassword' component={ResetPassword}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;

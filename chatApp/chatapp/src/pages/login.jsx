import React, { Component } from 'react';
import AccountImage from '../assets/account.png'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
           Email: this.Email,
           password: this.password,
        }
     }
    render() {
        return (
            <div className="login-Container">
                <div className="loginBox">
                    <img src={AccountImage} className="user" />
                    <h2>chatApp Login</h2>
                    <form method="post">
                        <p>Email</p>
                        <input type="text" placeholder="Enter Username" required />
                        <p>Password</p>
                        <input type="password" placeholder="**********" required />
                        <button type="submit" value="Sign in">Sign in</button>
                    </form>
                    <div className="forgot">
                        <a href="resetPassword"><p>forgotpassword</p></a>
                        <a href="registration"><p>create account?</p></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
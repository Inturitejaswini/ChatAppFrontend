import React, { Component } from 'react';
import AccountImage from '../assets/account.png'
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
           firstName: this.firstName,
           lastName: this.lastName,
           Email: this.Email,
           password: this.password,
           ConformPassword: this.ConformPassword,
           snackbarOpen: false,
           snackbarMessage: '',
        }
     }
    handleLogin = () => {
        this.props.history.push('/login')
     }
    render() {
        return (
            <div className="registration-Container">
                <div className="registerBox">
                    <img src={AccountImage} className="user" />
                    <h2>----------Register----------</h2>
                    <form>
                        <input type="text" placeholder="FirstName" required />
                        <input type="text" placeholder="LastName" required />
                        <input type="text" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <input type="password" placeholder="Conform Password" required />
                        <button type="submit" value="Register">Register</button>
                        <button type="login" value="Login" onClick={this.handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration;
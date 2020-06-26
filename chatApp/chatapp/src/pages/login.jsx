import React, { Component } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import '../css/login.css'
import AccountImage from '../assets/account.png'
import { userLogin } from '../services/userServices'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            Password: "",
            snackbarOpen: false,
            snackbarMsg: "",
        }
    }
    snackbarClose = (e) => {
        this.setState({ snackbarOpen: false })
    }
    handleEmailChange = (event) => {
        const Email = event.target.value;
        console.log('email', Email)
        this.setState({
            Email: Email
        })
    }
    handlePasswordChange = (event) => {
        const Password = event.target.value;
        console.log('password', Password)
        this.setState({
            Password: Password
        })
    }
    handleSubmit = (id) => {
        if (this.state.Email === "") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Email cann't be empty..!!"
            })
        } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.Email)) {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Invalid Email..!"
            })
        } else if (this.state.Password === "") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Password cann't be empty..!!"
            })
        } else if (this.state.Password.length < 6) {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "password must be of atleast 6 characters..!!"
            })
        } else {
            let data = {
                'Email': this.state.Email,
                'Password': this.state.Password
            }
            userLogin(data)
            console.log('login data', data)
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Login successfully!!"
            })
            console.log('login successfully', data)
        }
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div className="login-Container">
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={this.state.snackbarOpen}
                    autoHideDuration={2000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarMsg}</span>}
                    action={[
                        <IconButton
                            onClick={this.handleClose}>
                            <CloseIcon onClick={this.snackbarClose} />
                        </IconButton>
                    ]}
                />
                <div className="loginBox">
                    <img src={AccountImage} className="user" />
                    <h2>ChatApp Login</h2>
                    <p>Email</p>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={this.state.Email}
                        onChange={this.handleEmailChange}></input>
                    <p>Password</p>
                    <input
                        type={!this.state.visible ? "password" : "text"}
                        name="password"
                        placeholder="Password*"
                        margin="normal"
                        value={this.state.Password}
                        onChange={this.handlePasswordChange}>
                    </input>
                    <button
                        type="submit"
                        value="Sign in"
                        onClick={this.handleSubmit}>Sign in</button>
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
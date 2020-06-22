import React, { Component } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
// import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close'
import '../css/login.css'
import AccountImage from '../assets/account.png'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            snackbarOpen: false,
            snackbarMsg: "",
        }
    }
    snackbarClose = (e) => {
        this.setState({ snackbarOpen: false })
    }
    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState({
            email: email
        })
    }
    handleVisibility = () => {
        this.setState({
            visible: !this.state.visible
        });
    };
    handlePasswordChange = (event) => {
        const password = event.target.value;
        this.setState({
            password: password
        })
    }
    handleSubmit = () => {
        if (this.state.email === "") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Email cann't be empty..!!"
            })
        } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Invalid Email..!"
            })
        } else if (this.state.password === "") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Password cann't be empty..!!"
            })
        } else if (this.state.password.length < 6) {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "password must be of atleast 6 characters..!!"
            })
            .catch((err) => {
                this.setState({
                    openSnackBar: true,
                    snackbarMsg: 'Email or password incorrect'
                })
            })
        }
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
                        fullWidth
                        value={this.state.email}
                        onChange={this.handleEmailChange}></input>
                    <p>Password</p>
                    <input
                        type={!this.state.visible ? "password" : "text"}
                        name="password"
                        placeholder="Password*"
                        margin="normal"
                        fullWidth
                        value={this.state.password}
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
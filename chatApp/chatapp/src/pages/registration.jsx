import React, { Component } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import AccountImage from '../assets/account.png'
import '../css/registration.css'
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
            snackbarMsg: "",
        }
    }
    snackbarClose = (e) => {
        this.setState({ snackbarOpen: false })
    }
    handlefirstNameChange = (event) => {
        const firstName = event.target.value;
        this.setState({ firstName: firstName })
    }
    handlelastNameChange = (event) => {
        const lastName = event.target.value;
        this.setState({ lastName: lastName })
    }
    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState({ email: email })
    }
    handlePasswordChange = (event) => {
        const password = event.target.value;
        this.setState({ password: password })
    }
    handleConfirmPasswordChange = (event) => {
        const confirmPassword = event.target.value;
        this.setState({ confirmPassword: confirmPassword })
    }
    handleLogin = () => {
        this.props.history.push('/login')
    }
    handleRegister = () => {
        if (this.state.firstName==="") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "first Name cann't be Empty..!"
            })
        } else if(this.state.lastName==="") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Last Name cann't be Empty..!"
            })
        } else if (this.state.email === "") {
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
        }
    }
    render() {
        return (
            <div className="registration-Container">
                <div className="registerBox">
                    <img src={AccountImage} className="user" />
                    <h2>--------Register--------</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="FirstName"
                            fullWidth
                            margin="normal"
                            value={this.state.firstName}
                            onChange={this.handlefirstNameChange}>
                        </input>
                        <input
                            type="text"
                            placeholder="LastName"
                            fullWidth
                            margin="normal"
                            value={this.state.lastName}
                            onChange={this.handlelastNameChange}>
                        </input>
                        <input
                            type="text"
                            placeholder="Email"
                            fullWidth
                            value={this.state.email}
                            onChange={this.handleEmailChange}>
                        </input>
                        <input
                            type="password"
                            placeholder="Password"
                            fullWidth
                            value={this.state.password}
                            onChange={this.handlePasswordChange}>
                        </input>
                        <input
                            type="password"
                            placeholder="Conform Password"
                            fullWidth
                            value={this.state.confirmPassword}
                            onChange={this.handleConfirmPasswordChange}>
                        </input>
                        <button type="submit" value="Register" onClick={this.handleRegister}>Register</button>
                        <button type="login" value="Login" onClick={this.handleLogin}>Login</button>
                    </form>
                </div>
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
                            onClick={this.handleClose}
                        >
                            <CloseIcon onClick={this.snackbarClose} />
                        </IconButton>
                    ]}
                />
            </div>
        );
    }
}

export default Registration;
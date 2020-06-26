import React, { Component } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import {register} from '../services/userServices'
import AccountImage from '../assets/account.png'
import '../css/registration.css'
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: this.FirstName,
            LastName: this.LastName,
            Email: this.Email,
            Password: this.Password,
            // ConformPassword: this.ConformPassword,
            snackbarOpen: false,
            snackbarMsg: "",
        }
    }
    snackbarClose = (e) => {
        this.setState({ snackbarOpen: false })
    }
    handleFirstNameChange = (event) => {
        const FirstName = event.target.value;
        console.log('firstname',FirstName)
        this.setState({ FirstName: FirstName })
    }
    handleLastNameChange = (event) => {
        const LastName = event.target.value;
        console.log('lastname',LastName)
        this.setState({ LastName: LastName })
    }
    handleEmailChange = (event) => {
        const Email = event.target.value;
        console.log('email',Email)
        this.setState({ Email: Email })
    }
    handlePasswordChange = (event) => {
        const Password = event.target.value;
        console.log('password',Password)
        this.setState({ Password: Password })
    }
    // handleConfirmPasswordChange = (event) => {
    //     const confirmPassword = event.target.value;
    //     console.log('confirmPassword',confirmPassword)
    //     this.setState({ confirmPassword: confirmPassword })
    // }
    handleLogin = () => {
        this.props.history.push('/login')
    }
    handleRegister = (event) => {
        event.preventDefault()
        if (this.state.FirstName==="") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "first Name cann't be Empty..!"
            })
        } else if(this.state.LastName==="") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Last Name cann't be Empty..!"
            })
        } else if (this.state.Email === "") {
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
                snackbarMsg: "password must be of atleast 6 characters..!!"
            })
        } 
        // else if (this.state.password.length < 6) {
        //     this.setState({
        //         snackbarOpen: true,
        //         snackbarMsg: "password must be of atleast 6 characters..!!"
        //     })
        // }
        else{
            let data = {
                 'FirstName':this.state.FirstName,
                 'LastName':this.state.LastName,
                 'Email': this.state.Email,
                 'Password': this.state.Password
             }
             register(data)
             console.log('res from controller',data)
                 this.setState({
                     snackbarOpen: true,
                     snackbarMsg: "register successfully!!"
                 })
                 console.log('register successfully',data)
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
                            margin="normal"
                            value={this.state.FirstName}
                            onChange={this.handleFirstNameChange}>
                        </input>
                        <input
                            type="text"
                            placeholder="LastName"
                            margin="normal"
                            value={this.state.LastName}
                            onChange={this.handleLastNameChange}>
                        </input>
                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.Email}
                            onChange={this.handleEmailChange}>
                        </input>
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.Password}
                            onChange={this.handlePasswordChange}>
                        </input>
                        {/* <input
                            type="password"
                            placeholder="Conform Password"
                            value={this.state.confirmPassword}
                            onChange={this.handleConfirmPasswordChange}>
                        </input> */}
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
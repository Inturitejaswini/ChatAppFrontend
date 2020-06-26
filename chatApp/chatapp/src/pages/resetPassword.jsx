import React, { Component } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import AccountImage from '../assets/account.png'
import {resetPassword} from '../services/userServices'
import '../css/resetPassword.css'
class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newEmail: this.newEmail,
            _id:""
        }
    }
    snackbarClose = (e) => {
        this.setState({ snackbarOpen: false })
    }
    handleEmailChange = (event) => {
        const newEmail = event.target.value;
        this.setState({ newEmail: newEmail })
    }
    handleResetPassword = (event) => {
        event.preventDefault()
        if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.newEmail)) {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Invalid Email..!"
            })
        } else{
            let data = {
                 'newEmail': this.state.newEmail,
                 '_id':this.state._id
             }
             resetPassword(data)
             console.log('resetpassword data data',data)
                 this.setState({
                     snackbarOpen: true,
                     snackbarMsg: "resetpassword successfully!!"
                 })
                 console.log('reset successfully',data)
     }
    }
    render() {
        return (
            <div className="resetPassword-Container">
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
                        <IconButton onClick={this.handleClose}>
                            <CloseIcon onClick={this.snackbarClose} />
                        </IconButton>
                    ]}
                />
                <div className="ResetPassword">
                    <img src={AccountImage} className="user" />
                    <h2>Forgot Password</h2>
                    <form>
                        <p>Email</p>
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            value={this.state.newEmail}
                            onChange={this.handleEmailChange} />
                        <button type="submit" value="Reset Password" onClick={this.handleResetPassword}>Reset Password</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ResetPassword;
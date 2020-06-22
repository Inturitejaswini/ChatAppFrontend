import React, { Component } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import AccountImage from '../assets/account.png'
import '../css/resetPassword.css'
class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: this.Email,
        }
    }
    snackbarClose = (e) => {
        this.setState({ snackbarOpen: false })
    }
    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState({ email: email })
    }
    handleResetPassword = () => {
        if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Invalid Email..!"
            })
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
                        <IconButton
                            onClick={this.handleClose}
                        >
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
                            fullWidth
                            value={this.state.email}
                            onChange={this.handleEmailChange} />
                        <button type="submit" value="Reset Password" onClick={this.handleResetPassword}>Reset Password</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ResetPassword;
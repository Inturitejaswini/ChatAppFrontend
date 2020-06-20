import React, { Component } from 'react';
import AccountImage from '../assets/account.png'
class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: this.Email,
        }
    }
    render() {
        return (
            <div className="resetPassword-Container">
                <div className="ResetPassword">
                    <img src={AccountImage} className="user" />
                    <h2>Forgot Password</h2>
                    <form method="post">
                        <p>Email</p>
                        <input type="text" placeholder="Enter Your Email" required />
                        <button type="submit" value="Reset Password">Reset Password</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ResetPassword;
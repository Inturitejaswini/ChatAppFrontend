import React, { Component } from 'react';
import { ChatConsumer } from '../contextAPI'
import Chat from '../components/chat'
import '../css/nav.css'
import { Col, Button, Card, Row } from 'react-bootstrap'
class UsersList extends Component {
    render() {
        return (
            <div className="container-box">
                {/* <Card className="usersCard"> */}
                    <div>
                        <h1>Users</h1>
                    </div>
                    <div className="userNames">
                        <ChatConsumer>
                            {(value) => {
                                return value.users.map(chat => {
                                    return <Chat key={chat.id} users={chat} />
                                })
                            }}
                        </ChatConsumer>
                    </div>
                {/* </Card> */}
            </div>
        );
    }
}

export default UsersList;
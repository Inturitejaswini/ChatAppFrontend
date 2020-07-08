import React, { Component } from 'react';
import { ChatConsumer } from '../contextAPI'
import Chat from '../components/chat'
import { Tooltip, Fab, Button, Divider } from '@material-ui/core';
import { AddIcon } from '@material-ui/icons/Add';
import '../css/nav.css'
// import { Col, Button, Card, Row } from 'react-bootstrap'
class UsersList extends Component {
    render() {
        return (
            <div className="container-box">
                <div>
                    <Button>
                        <div>
                            <h3>Conversation</h3>
                        </div>
                    </Button>
                    <Divider />
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
            </div>
        );
    }
}

export default UsersList;
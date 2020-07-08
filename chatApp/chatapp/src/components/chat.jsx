import React, { Component } from 'react';
import { ChatConsumer } from '../contextAPI'
import { Col, Card, Row } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import '../css/nav.css'
class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            open: false,
        }
    }

    render() {
        const { id, title, img } = this.props.users;
        return (
            <div className="chat-Container">
                <ChatConsumer>
                    {(value) => (
                        <div className="users">
                            <Button className="users-btn">
                                <Link>
                                    <Card.Img src={img} className="image" />
                                </Link>
                                <div className="title">{title}</div>
                            </Button>
                        </div>
                    )}
                </ChatConsumer>
            </div>
        );
    }
}

export default Chat;
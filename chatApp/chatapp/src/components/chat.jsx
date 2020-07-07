import React, { Component } from 'react';
import { ChatConsumer } from '../contextAPI'
import { Col, Button, Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/nav.css'
class Chat extends Component {

    render() {
        const { id, title, img } = this.props.users;
        return (
            <div className="chatContainer">
                <ChatConsumer>
                    {(value) => (
                        <div className="users">
                        {/* <Card onClick={() => { value.handleDetails(id) }} > */}
                            <Link>
                                <Card.Img  src={img} className="image"/>
                            </Link>
                        {/* </Card> */}
                        <div>{title}</div> 
                        </div>
                    )}
                </ChatConsumer>
            </div>
        );
    }
}

export default Chat;
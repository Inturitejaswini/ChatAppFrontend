import React, { Component } from 'react';
import { ChatConsumer } from '../context/contextAPI'
import { Col, Button } from 'react-bootstrap'
class Chat extends Component {

    render() {
        const { id, img, name } = this.props.users
        return (
            <div>
                <ChatConsumer>
                    {(value) => (
                        <Button onClick={() => { value.handleList(id) }}>
                            <Button.img variant="top" src={img} />
                            <Col>
                                <small className="text-mutes text-right">{name}</small>
                            </Col>
                        </Button>
                    )}
                </ChatConsumer>
            </div>
        );
    }
}

export default Chat;
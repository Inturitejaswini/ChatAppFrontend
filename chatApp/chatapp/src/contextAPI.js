import React, { Component } from 'react'
import { usersDetails } from  './usersData';
const ChatContext = React.createContext();

class ChatProvider extends Component {
    state = {
        users: usersDetails,
    }

    render() {
        return (
            <ChatContext.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </ChatContext.Provider>
        )
    }
}

const ChatConsumer = ChatContext.Consumer
 export {ChatProvider,ChatConsumer};
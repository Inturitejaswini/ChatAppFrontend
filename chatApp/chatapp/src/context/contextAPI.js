import React, { Component } from 'react'
import {usersDetails} from  '../usersList';
const Context = React.createContext();

class ChatProvider extends Component {
    state = {
        users: usersDetails,
    }

    render() {
        return (
            <Context.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const ChatConsumer = Context.Consumer
 export {ChatProvider,ChatConsumer};
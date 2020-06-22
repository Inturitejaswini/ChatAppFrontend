import React, { Component } from 'react'
// import { dataProducts } from './appData';
const Context = React.createContext();

class ChatProvider extends Component {
    state = {
        products: dataProducts,
        // detailProduct: productDetails,
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

const ChatConsumer = Context.Consumer;
 export {ChatProvider,ChatConsumer};
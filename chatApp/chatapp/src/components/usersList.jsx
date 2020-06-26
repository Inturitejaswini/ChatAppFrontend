import React, { Component } from 'react';
import {ChatConsumer} from '../context/contextAPI'
import Chat from '../components/chat'
export default function UsersList() {
        return (
            <div className="users-Box">
                <ChatConsumer>
                    {(value)=>{
                        return value.users.map(users=>{
                            return <Chat key={users.id} users={users}/>
                        })
                    }}
                </ChatConsumer>
            </div>
        );
    }

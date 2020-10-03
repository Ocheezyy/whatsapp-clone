import React, { useEffect, useState } from 'react'
import '../Style/SidebarChat.css';
import { Avatar } from '@material-ui/core';

function SidebarChat(props) {
    const [seed, setSeed] = useState('');

    const createChat = () => {
        const roomName = prompt("Please enter a name for chat");

        if (roomName){
            // Add API work
        }
    };


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return !props.addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat

import React, { useContext } from 'react';
import Cam from "../Images/cam.png"
import Add from "../Images/add.png"
import More from "../Images/more.png"
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
    const { data } = useContext(ChatContext)

    return (
        <div className='chat'>
           <div className="chatInfo">
               <span>{data.user?.displayName}</span>
           </div>
           <Messages className='messages' />
           <Input />
        </div>
    );
}

export default Chat;

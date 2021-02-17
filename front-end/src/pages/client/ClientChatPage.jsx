import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../components/client/Menu';
import io from 'socket.io-client';
import uuid from 'uuid/v4';

const myId = uuid();
const socketClient = io('http://localhost:3001');

socketClient.on('connect', () => console.log('Server connected'));

export default function ClientChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const handleNewMessage = (...newMessage) => setMessages([...messages, newMessage]);
    socketClient.on('message', handleNewMessage);
    window.scrollTo(0, document.body.scrollHeight);
    return () => socketClient.off('message', handleNewMessage);
  }, [messages]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(message.trim()) {
      socketClient.emit('message', { nickname: user.email, message, id: myId })
      setMessage('');
    }
  }

  const handleInputChange = (e) => setMessage(e.target.value);

  const token = localStorage.getItem('token') || null;
  if (!token) return <Redirect to="/login" />;

  return (
    <main>
         <ul>
        {messages.map((m, index) => (
          <li key={index} data-testid="text-message">
            <span data-testid="nickname">{m[0]}</span><span data-testid="message-time"> - {m[1]}</span><br></br>
            <span data-testid="text-message">{m[2]}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <input data-testid="message-input" type="text" onChange={handleInputChange} value={message}/>
        <button data-testid="send-message" type="submit" onClick={handleFormSubmit}></button>
      </form>
    </main>
  )
}

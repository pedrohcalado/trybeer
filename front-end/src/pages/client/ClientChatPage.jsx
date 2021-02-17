import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import io from 'socket.io-client';
import uuid from 'uuid/v4';
import fetchUserMessages from '../../services/client/fetchAllMessages';
import Menu from '../../components/client/Menu';

const myId = uuid();
const socketClient = io('http://localhost:3001');

socketClient.on('connect', () => console.log('Server connected'));

const handleFormSubmit = (e, setMessage, message, user) => {
  e.preventDefault();
  if (message.trim()) {
    socketClient.emit('message', { nickname: user.email, message, id: myId });
    setMessage('');
  }
};

const renderMessages = (messages) => (
  <ul>
    {messages.map((m, index) => (
      <li key={ index } data-testid="text-message">
        <span data-testid="nickname">{m.nickname}</span>
        <span data-testid="message-time">{` - ${m.timestamp}`}</span>
        <br />
        <span data-testid="text-message">{m.message}</span>
      </li>
    ))}
  </ul>
);

const renderForm = (message, setMessage, handleInputChange, user) => (
  <form style={ { marginTop: '100px' } }>
    <input
      data-testid="message-input"
      type="text"
      onChange={ handleInputChange }
      value={ message }
    />
    <button
      data-testid="send-message"
      type="submit"
      onClick={ (e) => handleFormSubmit(e, setMessage, message, user) }
    >
      Enviar
    </button>
  </form>
);

const asyncFunc = async (setMessages, user) => {
  const allMessages = await fetchUserMessages(user.email);
  setMessages(allMessages);
};

const validateToken = () => {
  const token = localStorage.getItem('token') || null;
  if (!token) return <Redirect to="/login" />;
};

export default function ClientChatPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => asyncFunc(setMessages, user), []);
  useEffect(() => {
    const handleNewMessage = (newMessage) => setMessages([...messages, newMessage]);
    socketClient.on('message', handleNewMessage);
    return () => socketClient.off('message', handleNewMessage);
  }, [messages]);
  validateToken();
  const handleInputChange = (e) => setMessage(e.target.value);
  return (
    <main>
      <Menu title="Chat" />
      { renderMessages(messages) }
      { renderForm(message, setMessage, handleInputChange, user) }
    </main>
  );
}

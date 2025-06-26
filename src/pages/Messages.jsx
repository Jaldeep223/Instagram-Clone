import React, { useState } from 'react';
import '../styles/Messages.scss';

const mockMessages = [
  { id: 1, sender: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/21.jpg', message: 'Hey, how are you today?' },
  { id: 2, sender: 'Bob Smith', avatar: 'https://randomuser.me/api/portraits/men/31.jpg', message: 'Are we still meeting tomorrow?' },
  { id: 3, sender: 'Catherine Lee', avatar: 'https://randomuser.me/api/portraits/women/45.jpg', message: 'Just sent the files!' },
  { id: 4, sender: 'David Brown', avatar: 'https://randomuser.me/api/portraits/men/52.jpg', message: 'Let’s catch up soon.' },
  { id: 5, sender: 'Emma Green', avatar: 'https://randomuser.me/api/portraits/women/14.jpg', message: 'That’s awesome! Congrats!' },
];

const userAvatar = "You";

const Messages = () => {
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [newMessageText, setNewMessageText] = useState('');

  const openMessage = (id) => {
    const msg = mockMessages.find(m => m.id === id);
    if (msg) {
      setSelectedMessageId(id);
      setConversation([msg]);
      setNewMessageText('');
    }
  };

  const handleSend = () => {
    if (!newMessageText.trim()) return;

    setConversation(prev => [
      ...prev,
      { id: prev.length + 1, sender: 'You', avatar: userAvatar, message: newMessageText.trim() }
    ]);
    setNewMessageText('');
  };

  if (!selectedMessageId) {
    return (
      <div className="messages-container">
        <h2>Messages</h2>
        <ul className="message-list">
          {mockMessages.map(msg => (
            <li
              key={msg.id}
              onClick={() => openMessage(msg.id)}
              className="message-list-item"
            >
              <img src={msg.avatar} alt={msg.sender} className="list-avatar" />
              <div className="list-text">
                <strong>{msg.sender}</strong>: {msg.message.length > 40 ? msg.message.slice(0,40) + '...' : msg.message}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="messages-container">
      <button
        onClick={() => setSelectedMessageId(null)}
        className="back-button"
      >
        ← Back to Messages
      </button>
      <h2>Conversation with {conversation[0].sender}</h2>
      <div className="conversation-box">
        {conversation.map((msg, idx) => (
          <div
            key={idx}
            className={`conversation-message ${msg.sender === 'You' ? 'sent' : 'received'}`}
          >
            <img
              src={msg.avatar}
              alt={msg.sender}
              className="message-avatar"
            />
            <div className="message-content">
              <strong>{msg.sender}:</strong> {msg.message}
            </div>
          </div>
        ))}
      </div>

      <div className="send-message-area">
        <input
          type="text"
          placeholder="Type your message"
          value={newMessageText}
          onChange={e => setNewMessageText(e.target.value)}
          onKeyDown={e => { if(e.key === 'Enter') handleSend(); }}
          className="message-input"
        />
        <button
          onClick={handleSend}
          className="send-button"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;

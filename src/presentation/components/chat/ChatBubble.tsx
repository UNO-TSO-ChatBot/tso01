import React from 'react';
import type { Message } from '../../../domain/entities/Message';

interface Props {
  message: Message;
}

export const ChatBubble: React.FC<Props> = React.memo(({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`chat-bubble-wrapper ${isUser ? 'user' : 'bot'}`}>
      {!isUser && (
        <div className="chat-avatar bot-avatar">
          <img src="/logo-uno.jpg" alt="Bot Logo" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
      )}
      <div className={`chat-bubble ${isUser ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
        <p className="chat-text">{message.text}</p>
        <span className="chat-time">{message.time}</span>
      </div>
      {isUser && (
        <div className="chat-avatar user-avatar">
          {/* Avatar del usuario o icono por defecto */}
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      )}
    </div>
  );
});

ChatBubble.displayName = 'ChatBubble';

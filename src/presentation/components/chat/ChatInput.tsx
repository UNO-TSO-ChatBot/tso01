import React, { useState } from 'react';

interface Props {
  onSendMessage: (text: string) => void;
  isTyping: boolean;
}

export const ChatInput: React.FC<Props> = React.memo(({ onSendMessage, isTyping }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isTyping) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chat-input-field"
        placeholder="Escribe tu consulta..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isTyping}
        autoComplete="off"
      />
      <button 
        type="submit" 
        className="chat-submit-btn" 
        disabled={!text.trim() || isTyping}
        aria-label="Enviar mensaje"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
      </button>
    </form>
  );
});

ChatInput.displayName = 'ChatInput';

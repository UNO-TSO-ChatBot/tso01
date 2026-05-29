import React from 'react';

interface Props {
  onClose: () => void;
}

export const ChatHeader: React.FC<Props> = React.memo(({ onClose }) => {
  return (
    <div className="chat-header">
      <div className="chat-header-info">
        <div className="chat-header-avatar">
          <img src="/logo-uno.jpg" alt="UNO Logo" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
          <span className="online-indicator"></span>
        </div>
        <div className="chat-header-text">
          <h3>Asistente UNO</h3>
          <p>Sede Informática</p>
        </div>
      </div>
      <button className="chat-close-btn" onClick={onClose} aria-label="Cerrar chat">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  );
});

ChatHeader.displayName = 'ChatHeader';

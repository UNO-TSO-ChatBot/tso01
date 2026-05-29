import React, { useEffect, useRef, useCallback } from 'react';
import { useChatStore } from '../../application/store/useChatStore';
import { SendMessageUseCase } from '../../application/useCases/SendMessageUseCase';
import { ApiChatRepository } from '../../infrastructure/repositories/ApiChatRepository';
import { ChatHeader } from '../components/chat/ChatHeader';
import { ChatBubble } from '../components/chat/ChatBubble';
import { ChatInput } from '../components/chat/ChatInput';
import { FloatingButton } from '../components/chat/FloatingButton';
import '../styles/chat.css';

const chatRepository = new ApiChatRepository();
const sendMessageUseCase = new SendMessageUseCase(chatRepository);

export const ChatWidgetContainer: React.FC = () => {
  const { isOpen, messages, isTyping, toggleChat, addMessage, setTyping } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = useCallback(async (text: string) => {
    addMessage(text, 'user');
    setTyping(true);
    
    try {
      const response = await sendMessageUseCase.execute(text);
      addMessage(response, 'bot');
    } catch (error) {
      addMessage('Lo siento, ha ocurrido un error al conectarse con el servidor.', 'bot');
    } finally {
      setTyping(false);
    }
  }, [addMessage, setTyping]);

  return (
    <div className="chat-widget-root">
      {isOpen && (
        <div className="chat-window fade-in">
          <ChatHeader onClose={toggleChat} />
          
          <div className="chat-body">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
            
            {isTyping && (
              <div className="chat-typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-quick-actions">
            <a
              href="https://wa.me/541125960900"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-action-btn whatsapp-btn"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 .03c-6.602 0-11.961 5.338-11.961 11.93 0 2.13.56 4.21 1.62 6.06L.03 24l6.19-1.62c1.78.97 3.79 1.49 5.81 1.49 6.6 0 11.96-5.34 11.96-11.93 0-3.19-1.25-6.19-3.51-8.44-2.26-2.26-5.26-3.5-8.45-3.5zM12 21.93c-1.81 0-3.58-.48-5.14-1.4l-.37-.22-3.82 1 .37-3.69-.24-.38c-1.01-1.6-1.55-3.46-1.55-5.38 0-5.5 4.49-9.97 10-9.97 2.67 0 5.17 1.04 7.06 2.92 1.88 1.88 2.92 4.38 2.92 7.05-.01 5.5-4.5 9.97-10 9.97zm5.49-7.51c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.69.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.29-.47-2.45-1.51-.9-.8-1.51-1.8-1.69-2.1-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.95-2.28-.25-.61-.51-.53-.69-.54-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.4-.29.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.11 1.31 3.32.16.21 2.26 3.44 5.47 4.83.76.33 1.36.53 1.82.68.77.24 1.47.21 2.03.13.62-.09 1.78-.73 2.03-1.43.25-.7.25-1.29.17-1.42-.08-.13-.28-.2-.58-.35z" />
              </svg>
              <span>Enviar WhatsApp</span>
            </a>
          </div>

          <ChatInput onSendMessage={handleSendMessage} isTyping={isTyping} />
        </div>
      )}
      
      <FloatingButton onClick={toggleChat} isOpen={isOpen} />
    </div>
  );
};

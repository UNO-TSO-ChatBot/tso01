import { create } from 'zustand';
import type { Message } from '../../domain/entities/Message';

interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isTyping: boolean;
  messageId: number;
  toggleChat: () => void;
  addMessage: (text: string, sender: 'user' | 'bot') => void;
  setTyping: (typing: boolean) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  messages: [
    {
      id: 0,
      text: '¡Hola! Soy el asistente virtual de la UNO. ¿En qué puedo ayudarte hoy?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: 'bot',
    }
  ],
  isTyping: false,
  messageId: 1,
  
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  
  addMessage: (text, sender) => 
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: state.messageId,
          text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sender,
        },
      ],
      messageId: state.messageId + 1,
    })),
    
  setTyping: (typing) => set({ isTyping: typing }),
}));

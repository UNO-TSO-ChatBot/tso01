import type { ChatRepository } from '../../domain/repositories/ChatRepository';

export class ApiChatRepository implements ChatRepository {
  async sendMessage(text: string): Promise<string> {
    // Simulamos la latencia de red hacia un backend de IA
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`¡Hola! Soy el asistente virtual de la UNO. Recibí tu mensaje: "${text}". ¿En qué más puedo ayudarte hoy?`);
      }, 1000);
    });
  }
}

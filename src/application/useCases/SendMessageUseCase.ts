import type { ChatRepository } from '../../domain/repositories/ChatRepository';

export class SendMessageUseCase {
  chatRepository: ChatRepository;

  constructor(chatRepository: ChatRepository) {
    this.chatRepository = chatRepository;
  }

  async execute(text: string): Promise<string> {
    if (!text.trim()) throw new Error('El mensaje no puede estar vacío');
    const response = await this.chatRepository.sendMessage(text.trim());
    return response;
  }
}

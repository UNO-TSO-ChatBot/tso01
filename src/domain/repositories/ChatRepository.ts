export interface ChatRepository {
  sendMessage(text: string): Promise<string>;
}

export interface Message {
  id: number;
  text: string;
  time: string;
  sender: 'user' | 'bot';
}

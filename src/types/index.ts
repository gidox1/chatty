export enum MessageStatus {
  UNREAD = 'UNREAD',
  READ = 'READ',
  DELETED = 'DELETED'
}

export interface SingleMessage {
  id: number;
  content: string;
  senderId: number;
  status: MessageStatus
}

export interface MessageData {
  userId: number;
  username: string;
  messages: SingleMessage[]
}

import { MessageStatus } from '../types'

export const messages = [
  {
    userId: 1,
    username: 'Fally Pupa',
    messages: [
      {
        id: 1,
        content: 'Hello world',
        senderId: 1,
        status: MessageStatus.READ,
      },
      {
        id: 1,
        content: 'Hello Earth',
        senderId: 1,
        status: MessageStatus.READ,
      },
      {
        id: 1,
        content: 'Hello MotherEarth',
        senderId: 1,
        status: MessageStatus.READ,
      },
      {
        id: 1,
        content: 'Hello Jupiter',
        senderId: 1,
        status: MessageStatus.READ,
      },
      {
        id: 1,
        content: 'Hello Venus',
        senderId: 1,
        status: MessageStatus.UNREAD,
      },
      {
        id: 1,
        content: 'Hello Lorem Ipsum',
        senderId: 1,
        status: MessageStatus.UNREAD,
      },
    ],
  },
  {
    userId: 1,
    username: 'Dani Alves',
    messages: [
      {
        id: 1,
        content: 'Dani has the most trophies in the world',
        senderId: 1,
        status: MessageStatus.UNREAD,
      },
    ],
  },
  {
    userId: 1,
    username: 'Junior Neymar',
    messages: [
      {
        id: 1,
        content: 'Arguably the best player in the world?',
        senderId: 1,
        status: MessageStatus.UNREAD,
      },
    ],
  },
  {
    userId: 1,
    username: 'Diego Costa',
    messages: [
      {
        id: 1,
        content:
          "Diego is a beast of a footballer! Everyone knows that! But rest assured that i'll be voting Messi as player of the year!",
        senderId: 1,
        status: MessageStatus.UNREAD,
      },
    ],
  },
  {
    userId: 1,
    username: 'Diego Costa',
    messages: [
      {
        id: 1,
        content:
          "Diego is a beast of a footballer! Everyone knows that! But rest assured that i'll be voting Messi as player of the year!",
        senderId: 1,
        status: MessageStatus.UNREAD,
      },
    ],
  },
]

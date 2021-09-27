import type { Room } from "@/redux/type/store";

type ChatListData = {
  roomId: string;
  name: string;
  users: [];
};

type ChatListProps = {
  data: Room[];
};

type UserItem = {
  // ユーザー名
  name: string;
  // ソケットID
  socketId: string;
};

type UserListProps = {
  users: UserItem[];
};

type MessageItem = {
  // 履歴ID
  logId: number;
  // ユーザー名
  userName: string;
  // 投稿日時
  time: string;
  // メッセージ
  message: string;
};

type MessageListProps = {
  messages: MessageItem[];
};

/**
 * @package
 */
export type {
  ChatListData,
  ChatListProps,
  UserItem,
  UserListProps,
  MessageItem,
  MessageListProps,
};

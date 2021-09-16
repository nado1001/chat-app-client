type ChatListData = {
  roomId: string;
  name: string;
  users: [];
};

type ChatListProps = {
  data: ChatListData[];
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

/**
 * @package
 */
export type { ChatListData, ChatListProps, UserItem, UserListProps };

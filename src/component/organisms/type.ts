type ChatListData = {
  roomId: string;
  name: string;
  users: [];
};

type ChatListProps = {
  data: ChatListData[];
};

/**
 * @package
 */
export type { ChatListData, ChatListProps };

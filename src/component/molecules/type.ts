import * as H from "history";

type ChatListItemProps = {
  // チャットルーム名
  name: string;
  // チャットルームの人数
  numberOfPeople: number;
  // チャットルームID
  roomId: string;
  // 履歴
  history?: H.History;
};

/**
 * @package
 */
export type { ChatListItemProps };

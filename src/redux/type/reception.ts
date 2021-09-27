/**
 * チャットルーム作成
 */
type CreateRoom = {
  roomName: string;
};
/**
 * チャットルーム入室
 */
type JoinRoom = {
  roomId: string;
  userName: string;
};
/**
 * 会話
 */
type Conversation = {
  roomId: string;
  userName: string;
  message: string;
};

/**
 * 現在のチャットルーム
 */
type CurrentRoom = {
  roomId: string;
};

/**
 * @package
 */
export type { CreateRoom, JoinRoom, Conversation, CurrentRoom };

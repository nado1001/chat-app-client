/**
 * アプリケーションステート
 */
type AppState = {
  currentRoom: {
    id: string;
    name: string;
    users: {
      name: string;
      socketId: string;
    }[];
    logs: {
      logId: number;
      userName: string;
      time: string;
      message: string;
    }[];
  };
  currentUser: {
    name: string;
  };
  rooms: Room[];
};

/**
 * ユーザー
 */
type User = {
  name: string;
  socketId: string;
};

/**
 * チャットルーム
 */
type Room = {
  id: string;
  name: string;
  users: User[];
};

/**
 * @package
 */
export type { AppState, User, Room };

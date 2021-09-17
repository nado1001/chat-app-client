import * as H from "history";

type ChatListItemProps = {
  name: string;
  numberOfPeople: number;
  roomId: string;
  history?: H.History;
};

type CreateChatRoomModalProps = {
  // チャットルーム名が入力された場合のイベント
  onInputText: (e: React.FormEvent<HTMLDivElement>) => void; // チャットルーム名入力欄からフォーカスが外れた場合のイベント
  onBlurText: (e: React.FormEvent<HTMLDivElement>) => void;
  // 作成ボタンがクリックされた場合のイベント
  onClickButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

type UserProps = {
  name: string;
};

type MessageProps = {
  userName: string;
  time: string;
  message: string;
};

type JoinChatRoomProps = {
  onInputText: (e: React.FormEvent<HTMLDivElement>) => void;
  onBlurText: (e: React.FormEvent<HTMLDivElement>) => void;
  onClickButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

interface CreateMessageProps {
  onInputText: (e: React.FormEvent<HTMLDivElement>) => void;
  onBlurText: (e: React.FormEvent<HTMLDivElement>) => void;
  onClickButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/**
 * @package
 */
export type {
  ChatListItemProps,
  CreateChatRoomModalProps,
  UserProps,
  MessageProps,
  JoinChatRoomProps,
  CreateMessageProps,
};

import type { NextPage } from "next";
import type { UserItem, MessageItem } from "@/component/organisms/type";
import React, { useState } from "react";
import { UtilBUtton } from "@/component/atoms";
import { CreateMessage, JoinChatRoom } from "@/component/molecules";
import { UserList } from "@/component/organisms";
import { MessageList } from "@/component/organisms";
import { Grid, Box } from "@chakra-ui/react";

const users: UserItem[] = [
  { name: "ユーザー 1", socketId: "xxx1" },
  {
    name: "ユーザー 2",
    socketId: "xxx2",
  },
  {
    name: "ユーザー 3",
    socketId: "xxx3",
  },
];
const messages: MessageItem[] = [
  {
    logId: 1,
    userName: "ユーザー 1",
    time: "2020/01/01 00:01",
    message: "テストメッセージ 1",
  },
  {
    logId: 2,
    userName: "ユーザー 2",
    time: "2020/01/01 00:02",
    message: "テストメッセージ 2",
  },
  {
    logId: 3,
    userName: "ユーザー 3",
    time: "2020/01/01 00:03",
    message: "テストメッセージ 3",
  },
];

type ChatRoomPageProps = {};
type ChatRoomPageState = {
  // チャットルームへの入室フラグ
  isJoin: boolean;
};

const ChatRoom: NextPage<ChatRoomPageProps> = (props) => {
  const [isJoin, setIsJoin] = useState(false);
  return (
    <Grid
      templateRows="1fr 80px"
      templateColumns="250px 1fr"
      minH="100vh"
      boxSizing="border-box"
    >
      <Grid
        bg="#27224d"
        gridRow="1 / 3"
        gridColumn="1 / 2"
        templateRows="80px 1fr 80px"
        templateColumns="250px"
      >
        <Box
          fontSize="20px"
          color="#ffffff"
          fontWeight="bold"
          gridRow="1 / 2"
          gridColumn="1 / 2"
          p="10px"
        >
          チャットルーム名
        </Box>
        <Box gridRow="2 / 3" gridColumn="1 / 2" p="10px">
          <UserList users={users} />
        </Box>
        <Box gridRow="3 / 4" gridColumn="1 / 2" textAlign="center">
          <UtilBUtton name="戻る" onClick={() => {}} />
        </Box>
        <Box gridRow="1 / 2" gridColumn="2 / 3" pos="relative" p="10px">
          <MessageList messages={messages} />
        </Box>
        <Box borderTop="1px solid #d3d3d3" gridRow="2 / 3" gridColumn="2 / 3">
          <Box className="notJoin" display={!isJoin ? "block" : "none"}>
            <JoinChatRoom
              onInputText={() => {}}
              onBlurText={() => {}}
              onClickButton={() => {}}
            />
          </Box>
          <Box className="join" display={isJoin ? "block" : "none"}>
            <CreateMessage
              onInputText={() => {}}
              onBlurText={() => {}}
              onClickButton={() => {}}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChatRoom;

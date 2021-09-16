import type { NextPage } from "next";
import type { ChatListData } from "@/component/organisms/type";
import Head from "next/head";
import { Box, Flex, Text } from "@chakra-ui/react";
import { UtilBUtton } from "@/component/atoms";
import { CreateChatRoomModal } from "@/component/molecules";
import { ChatList } from "@/component/organisms";

const data: ChatListData[] = [
  { roomId: "ROOM_1", name: "チャットルーム 1", users: [] },
  {
    roomId: "ROOM_2",
    name: "チャットルーム 2",
    users: [],
  },
  {
    roomId: "ROOM_3",
    name: "チャットルーム 3",
    users: [],
  },
];

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>チャットルーム一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box p="20px">
          <Flex align="center" justify="space-between" mb="30px">
            <Text fontWeight="bold" fontSize="20px">
              チャットルーム一覧
            </Text>
            <CreateChatRoomModal
              onBlurText={() => {}}
              onInputText={() => {}}
              onClickButton={() => alert("作成しました")}
            />
          </Flex>
        </Box>

        <ChatList data={data} />
      </main>
    </div>
  );
};

export default Home;

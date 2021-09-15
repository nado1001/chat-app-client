import type { VFC } from "react";
import type { ChatListData, ChatListProps } from "@/component/organisms/type";
import React from "react";
import Router from "next/router";
import { Flex, Box, Text } from "@chakra-ui/react";
import { ChatListItem } from "@/component/molecules";

export const ChatList: VFC<ChatListProps> = (props) => {
  return (
    <div>
      {props.data &&
        props.data.map((item: ChatListData) => {
          return (
            <ChatListItem
              name={item.name}
              numberOfPeople={item.users.length}
              roomId={item.roomId}
              key={item.roomId}
            />
          );
        })}
    </div>
  );
};

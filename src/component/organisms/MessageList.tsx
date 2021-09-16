import type { VFC } from "react";
import type { MessageItem, MessageListProps } from "@/component/organisms/type";
import React from "react";
import { Message } from "@/component/molecules";
import { Flex, Box } from "@chakra-ui/react";

export const MessageList: VFC<MessageListProps> = (props) => {
  return (
    <Box pos="absolute" bottom="0">
      {props.messages &&
        props.messages.map((item: MessageItem) => {
          return (
            <Message
              userName={item.userName}
              time={item.time}
              message={item.message}
              key={item.logId}
            />
          );
        })}
    </Box>
  );
};

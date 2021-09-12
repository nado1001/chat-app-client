import type { VFC } from "react";
import React from "react";
import Router from "next/router";
import { Flex, Box, Text } from "@chakra-ui/react";
import type { ChatListItemProps } from "@/component/molecules/type";
import { UtilBUtton } from "@/component/atoms";

export const ChatListItem: VFC<ChatListItemProps> = (props) => {
  return (
    <Flex
      bg="#fff"
      align="center"
      justify="center"
      padding="10px 0"
      box-sizing=" border-box"
      border-bottom="1px solid #d3d3d3"
      _hover={{
        background: "#f5f5f5",
      }}
    >
      <Text w="calc(100% - 200px)" pl="10px">
        {props.name}
      </Text>
      <Text textAlign="right" w="100px">
        {props.numberOfPeople} 人
      </Text>
      <Box textAlign="right" w="100px">
        <UtilBUtton
          name="入室"
          onClick={() => Router.push(`/room?roomId=${props.roomId}`)}
          primary="true"
        />
      </Box>
    </Flex>
  );
};

import type { VFC } from "react";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import type { MessageProps } from "@/component/molecules/type";

export const Message: VFC<MessageProps> = (props) => {
  return (
    <Box>
      <Flex className="user" align="center">
        <Box className="name" fontWeight="bold">
          {props.userName}
        </Box>
        <Box className="time" fontSize="14px" ml="10px" color="#4d4d4d">
          {props.time}
        </Box>
        <Box className="message">{props.message}</Box>
      </Flex>
    </Box>
  );
};

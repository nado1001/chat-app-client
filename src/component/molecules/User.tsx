import type { VFC } from "react";
import React from "react";
import { Box } from "@chakra-ui/react";
import type { UserProps } from "@/component/molecules/type";

export const User: VFC<UserProps> = (props) => {
  return (
    <Box my="5px" color="#ffffff">
      <div>{props.name}</div>
    </Box>
  );
};

import type { ButtonProps } from "./type";
import type { VFC } from "react";
import React from "react";
import { Button } from "@chakra-ui/react";

export const UtilBUtton: VFC<ButtonProps> = (props) => {
  return (
    <Button
      display="inline-block"
      user-select="none"
      padding="8px 15px"
      background={props.primary === "true" ? "#ffd700" : "#dcdcdc"}
      primary={props.primary}
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
};

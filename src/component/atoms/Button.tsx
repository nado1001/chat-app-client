import type { ButtonProps } from "./type";
import type { VFC } from "react";
import React from "react";
import { Button } from "@chakra-ui/react";

export const UtilBUtton: VFC<ButtonProps> = (props) => {
  return (
    <Button
      display="inline-block"
      primary={props.primary}
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
};

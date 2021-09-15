import type { TextFieldProps } from "@/component/atoms/type";
import type { VFC } from "react";
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "@/styles/Atoms.module.scss";

export const TextField: VFC<TextFieldProps> = (props) => {
  return (
    <Box
      border="1px solid #dcdcdc"
      border-radius="3px"
      p="10px"
      _focus={{
        border: "1px solid #d3d3d3",
      }}
    >
      <Box
        contentEditable={true}
        onInput={props.onInput}
        onBlur={props.onBlur}
        className={styles.textField}
        data-placeholder={props.placeholder}
        _empty={{
          color: "#888",
        }}
      ></Box>
    </Box>
  );
};

import type { VFC } from "react";
import type { CreateMessageProps } from "@/component/molecules/type";
import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import { UtilBUtton, TextField } from "@/component/atoms";

export const CreateMessage: VFC<CreateMessageProps> = (props) => {
  return (
    <Grid templateRows="80px" templateColumns="1fr 80px" align="center">
      <Box p="10px">
        <TextField
          placeholder="メッセージ"
          onInput={props.onInputText}
          onBlur={props.onBlurText}
        />
      </Box>
      <Box className="button">
        <UtilBUtton name="投稿" onClick={props.onClickButton} primary="true" />
      </Box>
    </Grid>
  );
};

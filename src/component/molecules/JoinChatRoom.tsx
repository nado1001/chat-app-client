import type { VFC } from "react";
import type { JoinChatRoomProps } from "@/component/molecules/type";
import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import { UtilBUtton, TextField } from "@/component/atoms";

export const JoinChatRoom: VFC<JoinChatRoomProps> = (props) => {
  return (
    <Grid templateRows="80px" templateColumns="1fr 80px" align="center">
      <Box p="10px">
        <TextField
          placeholder="ユーザー名"
          onInput={props.onInputText}
          onBlur={props.onBlurText}
        />
      </Box>
      <Box>
        <UtilBUtton name="入室" onClick={props.onClickButton} primary="true" />
      </Box>
    </Grid>
  );
};

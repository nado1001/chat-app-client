import type { VFC } from "react";
import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import type { CreateChatRoomModalProps } from "@/component/molecules/type";
import { UtilBUtton, TextField } from "@/component/atoms";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const CreateChatRoomModal: VFC<CreateChatRoomModalProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>チャットルームを作成する</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>チャットルームを作成する</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextField
              placeholder="チャットルーム名"
              onInput={props.onInputText}
              onBlur={props.onBlurText}
            />
          </ModalBody>

          <ModalFooter>
            <UtilBUtton
              name="作成"
              onClick={() => props.onClickButton}
              primary="true"
            />
            <Button colorScheme="blue" ml={4} mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

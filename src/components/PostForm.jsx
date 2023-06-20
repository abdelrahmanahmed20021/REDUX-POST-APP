import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appendProduct } from "../utils/reducers/reducers";

export default function PostForm() {
  const initData = { title: "", category: "", description: "" };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const state = useSelector((state) => state.product.data);
  const [inputsValue, setInputsValue] = useState(initData);
  const toast = useToast();
  const dispatch = useDispatch();

  const formHandeler = ({ target }) => {
    const inputData = target.getAttribute("name");
    setInputsValue({
      ...inputsValue,
      [inputData]: target.value,
      id: `${Math.floor(Math.random() * 32141)}${Math.floor(
        Math.random() * 552416
      )}`,
    });
  };

  const createProduct = () => {
    const { title, category, description } = inputsValue;
    if (!title || !category || !description) {
      toast({
        title: "Inputs Error!",
        status: "error",
        description: "Please Enter Valid Data",
        duration: 2000,
        position: "top-right",
      });
    } else {
      dispatch(appendProduct(inputsValue));
      toast({
        title: "Update",
        status: "success",
        description: "Data Updated Successfully",
        duration: 2000,
        position: "top-right",
      });
      setInputsValue(initData);
    }
  };

  return (
    <>
      <Button
        bg={"dark.900"}
        color={"main.900"}
        _hover={{ bg: "primary.900", color: "dark.900" }}
        borderRadius={"3px"}
        onClick={onOpen}
      >
        Create Post
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={"30px"} flexDir={"column"}>
              <Input
                onChange={formHandeler}
                value={inputsValue.title}
                size={"md"}
                type="text"
                placeholder="Title"
                name="title"
              />
              <Input
                onChange={formHandeler}
                value={inputsValue.category}
                size={"md"}
                type="text"
                placeholder="category"
                name="category"
              />
              <Textarea
                onChange={formHandeler}
                value={inputsValue.content}
                size={"md"}
                type="text"
                placeholder="description"
                name="description"
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={createProduct}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

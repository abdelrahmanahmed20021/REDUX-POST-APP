import { Flex, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PostForm from "./components/PostForm";
import PostesBox from "./components/PostesBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./utils/reducers/reducers";

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  const toast = useToast();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Error !",
        description: state.error,
        status: "error",
        duration: 80000000,
      });
    }
  }, [state.error]);

  return (
    <>
      <Flex padding={"30px"} bg={"light.600"} height={"100vh"}>
        <Stack position={"fixed"} bottom={"10px"} right={"10px"} zIndex={"100"}>
          <PostForm />
        </Stack>
        {!state.error && <PostesBox />}
      </Flex>
    </>
  );
}

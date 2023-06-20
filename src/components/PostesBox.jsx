import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";

export default function PostesBox() {
  const state = useSelector((state) => state.product);
  return (
    <Flex
      gap={"30px"}
      padding={"40px 0"}
      overflow={"auto"}
      maxHeight={"100vh"}
      width={"100%"}
      justifyContent={"flex-start"}
      flexDir={"column"}
      alignItems={"center"}
    >
      {state.data &&
        state.data.map(({ title, category, description, id }) => (
          <PostCard
            key={id}
            title={title}
            description={description}
            category={category}
          />
        ))}
      {state.isLoading && <Spinner color="main.900" />}
    </Flex>
  );
}

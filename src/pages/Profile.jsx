import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Profile = () => {
  return (
    <>
      <div>Profile</div>
      <Flex gap={"10px"} padding={"30px"}>
        <Link to={"email"}>Email</Link>
        <Link to={"them"}>Them</Link>
      </Flex>
      <Outlet />
    </>
  );
};

import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const activeStyle = ({ isActive }) => {
    if (isActive) {
      return { textDecoration:"underline",color:"#111"};
    }
  };
  return (
    <Flex
      gap={"30px"}
      padding={"20px"}
      bg={"main.700"}
      color={"light.800"}
      fontSize={"1.2rem"}
      fontWeight={"600"}
    >
      <NavLink to={"/"} style={activeStyle}>
        Home
      </NavLink>
      <NavLink to={"/profile"} style={activeStyle}>
        Profile
      </NavLink>
      <NavLink to={"/about"} style={activeStyle}>
        About
      </NavLink>
      <NavLink to={"/setting"} style={activeStyle}>
        Setting
      </NavLink>
      <NavLink to={"/error"} style={activeStyle}>
        Other
      </NavLink>
    </Flex>
  );
};

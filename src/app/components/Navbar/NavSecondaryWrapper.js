"use client";
import React from "react";
import styled from "styled-components";
import IconButton from "../IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
//import { faSun } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: inherit;
  text-decoration: none;
  border: none;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

const DropdownList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  @media (max-width: 900px) {
    display: ${(props) => (props.$display ? "block" : "none")};
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;

    background-color: ${(props) => props.theme.colors.gray800};
  }
`;

export default function NavSecondaryWrapper({ children }) {
  const [display, setDisplay] = React.useState(false);

  return (
    <Wrapper>
      <IconButton>
        <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
      </IconButton>
      <Button onClick={() => setDisplay(!display)}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </Button>
      <DropdownList $display={display}>{children}</DropdownList>
    </Wrapper>
  );
}

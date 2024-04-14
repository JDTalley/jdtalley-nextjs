"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

interface Props {
  children: ReactNode;
}
interface UlProps {
  $display: boolean;
}

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: inherit;
  text-decoration: none;
  border: none;
  color: var(--color-text);

  &:hover {
    color: var(--color-primary);
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

const DropdownList = styled.ul<UlProps>`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: ${(props) => (props.$display ? "block" : "none")};
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 50px;
    padding-left: 20px;
    width: 100%;

    background-color: var(--color-primary-700);
  }
`;

export default function NavSecondaryContainer({ children }: Props) {
  const [display, setDisplay] = React.useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setDisplay(!display)}>
        <HamburgerMenuIcon />
      </Button>
      <DropdownList $display={display}>{children}</DropdownList>
    </Wrapper>
  );
}

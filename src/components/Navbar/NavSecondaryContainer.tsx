'use client';
import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
//import { faSun } from "@fortawesome/free-solid-svg-icons";

interface Props {
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

const DropdownList = styled.ul<Props>`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: ${(props) => (props.$display ? 'block' : 'none')};
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 50px;
    padding-left: 20px;
    width: 100%;

    background-color: var(--color-primary-700);
  }
`;

export default function NavSecondaryContainer({ children }) {
  const [display, setDisplay] = React.useState(false);

  return (
    <Wrapper>
      {/* <IconButton>
        <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
      </IconButton> */}
      <Button onClick={() => setDisplay(!display)}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </Button>
      <DropdownList $display={display}>{children}</DropdownList>
    </Wrapper>
  );
}

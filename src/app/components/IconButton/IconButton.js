"use client";
import styled from "styled-components";

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0 1rem;
  cursor: pointer;
  color: inherit;

  svg {
    min-width: 1em;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default IconButton;

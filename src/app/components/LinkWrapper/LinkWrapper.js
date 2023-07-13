"use client";
import styled from "styled-components";

const LinkWrapper = styled.span`
  display: inline;
  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default LinkWrapper;

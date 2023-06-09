"use client";
import styled from "styled-components";

const LinkWrapper = styled.span`
  a {
    text-decoration: underline;
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default LinkWrapper;

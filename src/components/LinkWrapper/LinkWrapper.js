"use client";
import styled from "styled-components";

const LinkWrapper = styled.span`
  a {
    text-decoration: none;
    color: var(--color-primary);
  }

  &:hover {
    text-decoration: underline var(--color-primary) 2px;
    text-underline-offset: 2px;
  }
`;

export default LinkWrapper;

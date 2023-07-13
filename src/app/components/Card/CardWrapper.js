"use client";
import styled from "styled-components";

const CardWrapper = styled.div`
  margin-bottom: 32px;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    h2 {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export default CardWrapper;

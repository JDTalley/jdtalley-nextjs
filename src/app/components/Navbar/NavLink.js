"use client";
import styled from "styled-components";

const NavLink = styled.span`
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    letter-spacing: 0.05rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default NavLink;

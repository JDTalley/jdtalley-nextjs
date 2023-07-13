"use client";
import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  padding: 16px 32px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.white};
`;

export default NavWrapper;

"use client";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.white};
`;

export default StyledFooter;

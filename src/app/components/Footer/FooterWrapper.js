"use client";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  text-align: center;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
`;

export default FooterWrapper;

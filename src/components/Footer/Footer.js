import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  background-color: ${(props) => props.theme.colors.secondary};
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Dakota Talley - 2023</p>
    </StyledFooter>
  );
}

export default Footer;

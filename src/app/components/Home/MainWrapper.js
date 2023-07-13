"use client";
import styled from "styled-components";

const MainWrapper = styled.main`
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.white};
  line-height: 1.6;
  padding: 0 32px;
  flex-grow: 2;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export default MainWrapper;

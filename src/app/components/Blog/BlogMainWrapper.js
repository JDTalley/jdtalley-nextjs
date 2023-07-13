"use client";
import styled from "styled-components";

const BlogMainWrapper = styled.main`
  padding: 0 32px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.white};
`;

export default BlogMainWrapper;

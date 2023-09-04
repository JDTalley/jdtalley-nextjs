'use client'
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 0 32px;
`;

const BlogLayout = ({ children }) => {
  return (
    <Wrapper>{children}</Wrapper>
  );
};

export default BlogLayout;

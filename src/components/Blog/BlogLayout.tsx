'use client';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 0 32px;
`;

const BlogLayout = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BlogLayout;

import React, { ReactNode } from 'react';
import PostImage from '../components/Mdx/PostImage';
import PostLink from '../components/Mdx/PostLink';
import Paragraph from '../components/Mdx/Paragraph';
import Header2 from '../components/Mdx/Header2';
import UnorderedList from '../components/Mdx/UnorderedList';

interface Props {
  children?: ReactNode;
}

const COMPONENT_MAP = {
  PostImage,
  h2: ({ children }: Props) => <Header2>{children}</Header2>,
  p: ({ children }: Props) => <Paragraph>{children}</Paragraph>,
  a: (props: React.JSX.IntrinsicElements['a']) => (
    <PostLink {...props}></PostLink>
  ),
  ul: ({ children }: Props) => <UnorderedList>{children}</UnorderedList>,
};

export default COMPONENT_MAP;

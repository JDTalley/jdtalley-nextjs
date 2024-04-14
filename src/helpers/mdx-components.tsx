import React, { ReactNode } from "react";
import PostImage from "../components/Mdx/PostImage";
import PostLink from "../components/Mdx/PostLink";

const COMPONENT_MAP = {
  PostImage,
  a: (props: React.JSX.IntrinsicElements["a"]) => (
    <PostLink {...props}></PostLink>
  ),
};

export default COMPONENT_MAP;

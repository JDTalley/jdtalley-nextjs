import Link from "next/link";
import LinkWrapper from "../LinkWrapper";
import NextImage from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import MdxWrapper from "./MdxWrapper";

const mdxComponents = {
  a: ({ href, children }) => (
    <LinkWrapper>
      <Link href={href}>{children}</Link>
    </LinkWrapper>
  ),
  Image: ({ src, alt, width, height }) => (
    <NextImage src={src} alt={alt} width={width} height={height}></NextImage>
  ),
};

function Mdx({ mdx }) {
  const MDXComponent = useMDXComponent(mdx);

  return (
    <MdxWrapper>
      <MDXComponent components={mdxComponents}></MDXComponent>
    </MdxWrapper>
  );
}

export default Mdx;

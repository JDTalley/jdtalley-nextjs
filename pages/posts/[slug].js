import { getAllPostSlugs, getPostData } from "../../lib/posts";
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';


export async function getStaticPaths() {
  const paths = await getAllPostSlugs();
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);

  return {
    props: {
      ...postData,
    },
  };
}

export default function Post({ code, frontmatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <BlogLayout {...code}>
      <Component />
    </BlogLayout>
  )
}
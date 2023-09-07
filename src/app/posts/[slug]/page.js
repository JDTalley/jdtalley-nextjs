import React from 'react';
import { SITE_NAME } from '../../../constants';
import { loadPostBySlug } from '../../../helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
//import { compileMDX } from 'next-mdx-remote/rsc';
import COMPONENT_MAP from '../../../helpers/mdx-components';
import BlogHeader from '../../../components/Blog/BlogHeader';
import BlogArticle from '../../../components/Blog/BlogArticle';

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadPostBySlug(params.slug);

  return {
    title: `${frontmatter.title} | ${SITE_NAME}`,
    description: frontmatter.excerpt,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: 'article',
      publishedTime: Date(frontmatter.datePublished),
    }
  }
}

async function Post({ params }) {
  const { frontmatter, content } = await loadPostBySlug(params.slug);
  return (
    <main>
      <BlogHeader src={frontmatter.image} title={frontmatter.title}></BlogHeader>
      <BlogArticle>
        <MDXRemote options={{ mdxOptions: { remarkPlugins: [remarkGfm], } }} source={content} components={COMPONENT_MAP}></MDXRemote>
      </BlogArticle>
    </main>

  )
}

export default Post;

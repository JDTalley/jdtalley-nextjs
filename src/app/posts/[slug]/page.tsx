import React from 'react';
import { SITE_NAME } from '../../../constants';
import { loadPostBySlug } from '../../../helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import COMPONENT_MAP from '../../../helpers/mdx-components';
import BlogHeader from '../../../components/Blog/BlogHeader';
import BlogArticle from '../../../components/Blog/BlogArticle';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const { frontmatter } = await loadPostBySlug(params.slug);

  const datePublished = new Date(frontmatter.datePublished);

  return {
    title: `${frontmatter.title} | ${SITE_NAME}`,
    description: frontmatter.excerpt,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: 'article',
      publishedTime: datePublished.toString(),
    },
  };
}

async function Post({ params }: Props) {
  const { frontmatter, content } = await loadPostBySlug(params.slug);

  return (
    <main>
      <BlogHeader title={frontmatter.title}></BlogHeader>
      <BlogArticle>
        <MDXRemote
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          source={content}
          components={COMPONENT_MAP}
        ></MDXRemote>
      </BlogArticle>
    </main>
  );
}

export default Post;

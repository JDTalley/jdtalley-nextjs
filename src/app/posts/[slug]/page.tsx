import React from "react";
import { SITE_NAME } from "../../../constants";
import { loadPostBySlug } from "../../../helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import COMPONENT_MAP from "../../../helpers/mdx-components";
import styles from "./post.module.css";

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
      type: "article",
      publishedTime: datePublished.toString(),
    },
  };
}

async function Post({ params }: Props) {
  const { frontmatter, content } = await loadPostBySlug(params.slug);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{frontmatter.title}</h1>
      </header>
      <article className={styles.article}>
        <MDXRemote
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          source={content}
          components={COMPONENT_MAP}
        ></MDXRemote>
      </article>
    </>
  );
}

export default Post;

//import { getPostBySlug } from "../../lib/mdx";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Mdx from "../../components/Mdx";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

async function getPostFromParams(slug) {
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return post;
}

export default async function Page({ params }) {
  const post = await getPostFromParams(params.slug);
  return <Mdx mdx={post.body.code}></Mdx>;
}

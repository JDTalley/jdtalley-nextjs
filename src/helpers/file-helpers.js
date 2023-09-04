import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';

const contentPath = path.join(process.cwd(), '/content');

export async function getAllPostsByDate() {
    const fileNames = await fs.readdir(contentPath);

    const posts = [];

    for (const fileName of fileNames) {
        const rawContent = await fs.readFile(`${contentPath}/${fileName}`, 'utf8');

        const { data: frontmatter } = matter(rawContent);

        posts.push({
            slug: fileName.replace('.mdx', ''),
            ...frontmatter,
        });
    }

    return posts.sort((p1, p2) =>
        p1.datePublished < p2.datePublished ? 1 : -1
    );
}

export const loadPostBySlug = React.cache(
    async function getPostBySlug(slug) {
        const rawContent = await fs.readFile(`${contentPath}/${slug}.mdx`, 'utf8');

        const { data: frontmatter, content } = matter(rawContent);

        return { frontmatter, content };
    }
);
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from "mdx-bundler";
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPostSlugs() {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
        return {
            params: {
                slug: filename.replace(/\.mdx$/, ''),
            },
        };
    });
}

export function getSortedPostsData() {
    const filenames = fs.readdirSync(postsDirectory);

    const allPostsData = filenames.map((filename) => {
        const slug = filename.replace(/\.mdx/, '');

        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            slug,
            ...matterResult.data,
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.data < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { code, frontmatter } = await bundleMDX({source: fileContents}, {
        mdxOptions(options) {
            options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
            
            return options;
        },
    });

    return {
        code,
        frontmatter,
    };
}
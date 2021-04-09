import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type BlogPost = {
  title: string;
  tags: string[];
  createdAt: string;
  content: string;
  type: 'book' | 'blog';
  slug: string;
  excerpt: string;
};

type MatterBlogPost = {
  data: {
    title: string;
    type: 'blog' | 'book';
    tags: string;
    createdAt: string;
    excerpt: string;
  };
  content: string;
};

const MDX_PATH = './src/mdx';

const fromMatterToBlogPost = (
  matterBlog: MatterBlogPost,
  slug: string,
): BlogPost => {
  const {
    content,
    data: { title, createdAt, tags, type, excerpt },
  } = matterBlog;

  return {
    title,
    type,
    content,
    createdAt,
    slug,
    excerpt,
    tags: tags.split(','),
  };
};

function getAll(): BlogPost[] {
  const fileNames = fs.readdirSync(path.resolve(process.cwd(), MDX_PATH));
  const filesContents = fileNames.map((fileName) =>
    fs.readFileSync(path.resolve(process.cwd(), MDX_PATH, fileName), {
      encoding: 'utf8',
    }),
  );
  const fileContentsWithMetadata = filesContents.map<MatterBlogPost>(
    (content) => <any>matter(content, { excerpt: true }),
  );

  return fileContentsWithMetadata.map((content, index) =>
    fromMatterToBlogPost(content, fileNames[index]),
  );
}

export function getAllBlogs(): BlogPost[] {
  return getAll().filter(({ type }) => type === 'blog');
}

export function getAllBooks(): BlogPost[] {
  return getAll().filter(({ type }) => type === 'book');
}

export function getBySlug(slug: string): BlogPost {
  const content = fs.readFileSync(
    path.resolve(process.cwd(), MDX_PATH, `${slug}.mdx`),
    {
      encoding: 'utf8',
    },
  );

  const fileContentWithMetadata: MatterBlogPost = matter(content) as any;

  return fromMatterToBlogPost(fileContentWithMetadata, slug);
}

export function getBlogByTag(tag: string): BlogPost[] {
  return getAll().filter(
    ({ type, tags }) => type === 'blog' && tags.includes(tag),
  );
}

export function getBookByTag(tag: string): BlogPost[] {
  return getAll().filter(
    ({ type, tags }) => type === 'book' && tags.includes(tag),
  );
}

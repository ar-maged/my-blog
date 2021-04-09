import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { MdxRemote } from 'next-mdx-remote/types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import { BlogPost, getAllBlogs } from '../../repos/blogs';
import Link from 'next/link';

type Props = {
  blogs: BlogPost[];
};

/**
 * Image + exceprt
 */

const IndexPage = (props: Props) => {
  const { blogs } = props;

  return (
    <Layout title="Blogs">
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div>
          <Link href={`/blogs/${blog.slug}`}>
            <a>
              <h2>{blog.title}</h2>
              <code>{blog.excerpt}</code>
            </a>
          </Link>
          <span>{blog.tags.join(' ')}</span>
        </div>
      ))}
    </Layout>
  );
};

export default IndexPage;

export async function getStaticProps(): Promise<{ props: Props }> {
  return { props: { blogs: getAllBlogs() } };
}

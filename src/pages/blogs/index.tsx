import Link from 'next/link';

import Layout from '../../components/Layout';
import { BlogPost, getAll } from '../../repos/blogs';

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
        <div key={blog.slug}>
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
  return { props: { blogs: await getAll() } };
}

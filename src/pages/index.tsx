import Layout from '../../components/Layout';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { MdxRemote } from 'next-mdx-remote/types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

{
  /* <Image
  src={require('../../public/images/landscape.jpeg?lqip')}
  alt="Picture of the author"
  width={500}
  height={500}
/>; */
}
const IndexPage = (props: Props) => {
  return (
    <Layout title="Welcome to my blog">
      <h1>Ahmed Elhanafy</h1>
    </Layout>
  );
};

export default IndexPage;

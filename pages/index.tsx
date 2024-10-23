import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../components/Layout';
import { GetStaticProps } from 'next';
import { PostData } from '../types';

type HomeProps = {
  posts: PostData[];
};

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <Layout>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: matterResult.data.title,
      date: matterResult.data.date,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
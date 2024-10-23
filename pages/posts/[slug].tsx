import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Layout from '../../components/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../types';

type PostProps = {
  postData: PostData;
  content: string;
};

const Post: React.FC<PostProps> = ({ postData, content }) => {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <div>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    props: {
      postData: {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
      },
      content: matterResult.content,
    },
  };
};

export default Post;
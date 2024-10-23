import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostData } from '../types';

export const getPostData = (slug: string): PostData & { content: string } => {
  const filePath = path.join('posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    content,
  };
};
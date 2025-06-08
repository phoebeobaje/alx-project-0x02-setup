import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import type { PostProps } from '@/interfaces';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(formatted);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </main>
    </>
  );
};

export default PostsPage;

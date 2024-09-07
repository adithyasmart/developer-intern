import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import Header from '../components/Header';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <Header />
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <BlogCard key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </div>
  );
}

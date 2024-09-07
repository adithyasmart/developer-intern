import { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Post({ id }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  return { props: { id } };
}

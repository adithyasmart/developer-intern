import { useState } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <Header />
      <h1>Create Post</h1>
      <Form title={title} setTitle={setTitle} content={content} setContent={setContent} onSubmit={handleSubmit} />
    </div>
  );
}

import Button from './Button';

export default function BlogCard({ post, onDelete }) {
  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
      <Button onClick={() => onDelete(post.id)}>Delete</Button>
      <Button onClick={() => window.location.href = `/${post.id}`}>View</Button>
    </div>
  );
}

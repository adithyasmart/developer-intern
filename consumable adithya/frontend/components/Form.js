export default function Form({ title, setTitle, content, setContent, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Submit</button>
    </form>
  );
}

import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("John");
  const [sending, setSending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setSending(true)
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
        setSending(false);
        history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="John">John</option>
          <option value="Samuel">Samuel</option>
          <option value="Goku">Goku</option>
        </select>
        {!sending && <button>Add Blog</button>}
        {sending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default CreateBlog;

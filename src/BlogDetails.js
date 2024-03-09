import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogs, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  return (
    <div className="blog-details">
      {isLoading && (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
        <h2>{blogs.title}</h2>
        <br />
        <div>{blogs.body}</div>
        <br />
        <strong>Author :</strong>
        <p>{blogs.author}</p>
        </article>   
      )}
    </div>
  );
};

export default BlogDetails;

import { Link } from "react-router-dom/cjs/react-router-dom";


const Bloglist = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title} <i className=" fad fa-book-open"></i></h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          <div className="preview">
          <h2>{blog.title}</h2>
          <p>
            <strong>Written By:</strong>
          </p>
          <p>{blog.author}</p>
          </div>      
        </Link>
          <i className="fad fa-book"></i>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;

import { Link } from "react-router-dom";

const Bloglist = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <div>
            <h2 className="title">{blog.title}</h2>
            <h5>Written by {blog.author}</h5>
          </div>
          <div>
            <Link to={`/blog/${blog.id}`}>
            <button style={{ margin: "0 1rem 0 2rem", fontSize: "1rem" }}>
              Open
            </button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;

import { useState } from "react";

const Addblog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const[submitStatus, setSubmitStatus]=useState('Submit');
  const[upload, setUpload]=useState(false);

  console.log({title, body, author});

  const handleSubmit = (e)=>{
    setSubmitStatus('Uploading . . . ');
      e.preventDefault();
      const blogData={title, body, author};

      fetch('http://localhost:8000/blogs/', {
          method:'POST',
          headers:{"content-Type" : "application/json"},
          body: JSON.stringify(blogData)
      }).then(()=>{
        setSubmitStatus('Uploaded');
        setUpload(true);
      })
  }


  return (
    <div className="create">
      <h2>Add Your Blog</h2>
      <form onSubmit={handleSubmit}>
          <label>Blog Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Blog Body</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <label>Blog Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        <button>{submitStatus}</button>
        </form>
        {upload && <div style={{marginTop:"2rem",color: "green"}}>Visit Home to check your blog</div>}
    </div>
  );
};

export default Addblog;

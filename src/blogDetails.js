import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const [del, setDel] = useState('Delete');
    const[delStatus, setStatus]=useState(false);

  const { id } = useParams();
  const { blogs, error, fetching } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  console.log({ blogs, error, fetching });
  const handleDelete = () => {
      setDel('Deleting. . .');
      setTimeout(()=>{
        fetch("http://localhost:8000/blogs/" + blogs.id, {
            method: "DELETE",
          }).then(()=>{
              setDel('Deleted . . .');
              setStatus(true);
          })
      }, 1000);
        
  };
  return (
    <div>
        {delStatus && <h1 className="deleted">This Blog is deleted return to home.</h1>}
      {!delStatus && (<div>{fetching && <h2 className="loadingData">Loading Data . . .</h2>}
      {error && <h2>There's some error in fetching data Return to homepage</h2>}
      {blogs && (
        <div className="details">
          <h1>{blogs.title}</h1>
          <h5>Written by {blogs.author}</h5>
          <p>{blogs.body}</p>
          <button onClick={handleDelete}>{del}</button> 
        </div>
      )}</div>)}
    </div>
  );
};

export default BlogDetails;

import { useEffect, useState } from "react";


const useFetch = (url) =>{
const [fetching, setFetching] = useState(true);
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    setTimeout(()=>{
      fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setFetching(false);
      })
      .catch((err) => {
        setError(err.message);
        setFetching(false);
      });
    }, 1000)
    
  }, [url]);

  return {blogs, error, fetching};
}

export default useFetch;
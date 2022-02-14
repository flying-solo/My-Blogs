
import Bloglist from "./blogList";
import useFetch from "./useFetch";

const AllBLOGS = () => {

    const {blogs, error, fetching} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="content">
      {fetching && <h3>Data is being Fetched . . .</h3>}
      {blogs && <Bloglist blogs={blogs} />}
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default AllBLOGS;

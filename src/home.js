
import Bloglist from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs,isLoading,error} = useFetch('http://localhost:8000/blogs');
  return (
    <div className="home">
    {error && <div>{error}</div> }
      {isLoading && (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
      {blogs && <Bloglist blogs={blogs} title="All Blogs " />}
      {/* {blogs && <Bloglist blogs={blogs.filter((blogs)=> blogs.author ==='Samuel')} title="SKOB Blogs " />} */}
    </div>
  );
};

export default Home;

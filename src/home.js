import { useState } from "react";
import Bloglist from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "SSJ1 - Genesis", body: "lorem ipsum...", author: "John", id: 1 },
    { title: "SSJ2 - Exodus", body: "lorem ipsum...", author: "Samuel", id: 2 },
    { title: "SSJ3 - Kings", body: "lorem ipsum...", author: "Barnes", id: 3 },
    {
      title: "SSJ4 - Revelations",
      body: "lorem ipsum...",
      author: "SKOB",
      id: 4,
    },
  ]);
  return (
  <div className="home">
   <Bloglist  blogs={blogs}/>
  </div>
  );
};

export default Home;

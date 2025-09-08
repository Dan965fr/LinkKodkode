import { useEffect, useState } from "react";
import Post from "../components/Post";
import type { PostType } from "../types/Posts";
import "./HomePage.css";

export default function HomePage() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="homepage">
      <h1 className="homepage-title">Linkodkod</h1>

      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import Post from "../components/Post";
import type { PostType } from "../types/Posts";
import "./HomePage.css";

export default function HomePage({history}:any) {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading ,setLoading] = useState(true);
  const [error,setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const goToPost = (id:number) => {
    history.push(`/post/${id}`);
  };

  if(loading) return <p>loading posts</p>
  if(error) return <p>{error}</p>

  return (
    <div className="homepage">
      <h1 className="homepage-title">Linkodkod</h1>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} onClick={() => goToPost(post.id)} style={{ cursor: "pointer" }}>
            <Post {...post} />
          </div>
        ))}
      </div>
    </div>
  )
}
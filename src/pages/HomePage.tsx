import { useEffect, useState } from "react";
import Post from "../components/Post";
import type { PostType } from "../types/Posts";
import { useNavigate } from "react-router";
import "./HomePage.css";

export default function HomePage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading ,setLoading] = useState(true);
  const [error,setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); 
      return;
    }

    fetch("http://localhost:3000/api/posts", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);


  

  if(loading) return <p>loading posts...</p>
  if(error) return <p>{error}</p>

  return (
    <div className="homepage">
      <h1 className="homepage-title">Linkodkod</h1>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} onClick={() => navigate(`api/posts/${post.id}`)} >
            <Post {...post} />
          </div>
        ))}
      </div>
    </div>
  )
}
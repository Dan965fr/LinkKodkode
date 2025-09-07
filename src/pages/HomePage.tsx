import Post from "../components/Post";
import postsData from "../data/posts.json";
import type{ PostType } from "../types/Posts";
import "./HomePage.css";

export default function HomePage() {
  const posts: PostType[] = postsData;

  return (
    <div className="homepage">
      <h1 className="homepage-title">Linkodkod</h1>

      <div className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.id}
            {...post} 
          />
        ))}
      </div>
    </div>
  );
}
import "./Post.css";
import  type { PostType } from "../types/Posts";

export default function Post({ img_url, description, likes, user_name, date }: PostType) {
  let src:string; 
 if (img_url.startsWith("http")) {
    src = img_url;
  } else if (img_url.startsWith("data:")) {
    src = img_url;
  } else {
    src = `http://localhost:3000${img_url}`;
  }

  return (
    <div className="post">
      <img src={src} alt="post" className="post-image" />
      <div className="post-content">
        <p className="post-description">{description}</p>
        <p className="post-likes"> likes: {likes}</p>
        <p className="post-user_name">from: {user_name}</p>
        <p className="post-time">{date}</p>
      </div>
    </div>
  );
}

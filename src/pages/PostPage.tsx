import { useState,useEffect } from "react";
import Post from "../components/Post";
import type {PostType} from '../types/Posts';

export default function PostPage({match}:any) {
    const [post,setPost] = useState<PostType|null>(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");


    useEffect(() => {
    const id = match.params.id;
    fetch(`http://localhost:3000/posts/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Post not found");
        return res.json();
      })
      .then(data => setPost(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
    }, [match.params.id]);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!post) return null;
  return (
    <Post {...post}/>
  )
}

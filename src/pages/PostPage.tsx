import { useState,useEffect } from "react";
import { useParams } from "react-router";
import Post from "../components/Post";
import type {PostType} from '../types/Posts';

export default function PostPage() {
    const {id} = useParams();
    const [post,setPost] = useState<PostType|null>(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");


    useEffect(() => { 
    fetch(`http://localhost:3000/api/posts/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Post not found");
        return res.json();
      })
      .then(data => setPost(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!post) return null;
  return (
    <Post {...post}/>
  )
}

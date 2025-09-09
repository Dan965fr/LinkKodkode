import React ,{ useState } from "react";
import { useNavigate } from "react-router";
import './AddPost.css'

export default function AddPost() {
  const [description,setDescription] = useState("");
  const [imgUrl,setImgUrl] = useState("");
  const [userName,setUserName] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const newPost = {
      description,
      img_url:imgUrl,
      user_name:userName,
    };

    fetch("http://localhost:3000/api/posts",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(newPost),
    })
    .then((res)=> {
      if(!res.ok) throw new Error("Faild to add post");
      return res.json();
    })
    .then(() => navigate("/"))
    .catch((err)=> setError(err.message))
    .finally(()=> setLoading(false));
  };
  return (
    <div className="add-postpage">
      <h2>Add new Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="image URL" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
        <input type="text" placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? "Adding...":"Add Post"}</button>
      </form>
      {error && <p>{error}</p>}

    </div>
  )
}

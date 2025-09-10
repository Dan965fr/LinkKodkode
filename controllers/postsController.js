import {
  getAllPosts,
  getPostById,
  createPost
} from "../services/postsService.js";

export function getAllPostsC(req, res) {
  const posts = getAllPosts();
  res.json(posts);
}

export function getPostByIdC(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({msg:"Invalid id"})
  const post = getPostById(id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(post);
}

export function createPostC(req, res) {
  const { img_url, description } = req.body;

  
  if (!img_url || !description ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const user_name = req.username
  if (!user_name ) {
    return res.status(400).json({ message: "Missing required fields" });
  }


  try {
    const newPost = createPost({ img_url, description, user_name });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: "Failed to create post", error: err.message });
  }
}





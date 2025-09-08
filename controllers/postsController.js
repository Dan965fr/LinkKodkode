import {
  fetchAllPosts,
  fetchPostById
} from "../services/postsService.js";

export function getAllPosts(req, res) {
  const posts = fetchAllPosts();
  res.json(posts);
}

export function getPostById(req, res) {
  const id = parseInt(req.params.id);
  const post = fetchPostById(id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(post);
}


import fs from "fs";
import path from "path";

const filePath = path.join(path.resolve(), "/data/posts.json");

let postsData = JSON.parse(fs.readFileSync(filePath));

export function getAllPosts() {
  return postsData;
}

export function getPostById(id) {
  return postsData.find(post => post.id === id);
}

export function createPost({img_url,description,user_name}){
  const newPost = {
    id:postsData.length > 0 ? postsData[postsData.length - 1].id + 1 : 1,
    img_url,
    description,
    likes: 0,
    user_name,
    date:new Date().toLocaleString(),
  };

  postsData.push(newPost);
  saveData();

  return newPost;
}

export function saveData() {
  fs.writeFileSync(filePath, JSON.stringify(postsData, null, 2));
}
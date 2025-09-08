import fs from "fs";
import path from "path";
import postsData from "../data/posts.json" assert { type: "json" };

const filePath = path.resolve("./data/posts.json");

export function fetchAllPosts() {
  return postsData;
}

export function fetchPostById(id) {
  return postsData.find((post) => post.id === id);
}


function saveData() {
  fs.writeFileSync(filePath, JSON.stringify(postsData, null, 2));
}
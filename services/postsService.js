import fs from "fs";
import path from "path";

const filePath = path.join(path.resolve(), "/data/posts.json");

let postsData = JSON.parse(fs.readFileSync(filePath));

export function fetchAllPosts() {
  return postsData;
}

export function fetchPostById(id) {
  return postsData.find(post => post.id === id);
}

// פונקציה לשמירת שינויים אם בעתיד מוסיפים/משנים פוסטים
export function saveData() {
  fs.writeFileSync(filePath, JSON.stringify(postsData, null, 2));
}
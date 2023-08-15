const express = require("express");
const {
  setPosts,
  getPosts,
  editPosts,
  deletePost,
  likePosts,
  disLikePosts,
} = require("../controllers/post.controller");
const router = express.Router();

router.get("/", getPosts);

router.post("/", setPosts);

router.put("/:id", editPosts);

router.delete("/:id", deletePost);

router.patch("/like-post/:id", likePosts);

router.patch("/dislike-post/:id", disLikePosts);

module.exports = router;

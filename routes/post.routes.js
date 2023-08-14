const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Voici les donnees" });
});

router.post("/", (req, res) => {
  //console.log(req.body);
  res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
  res.json({ message: req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `post suprime id : ${req.params.id}` });
});

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "post liker par id : " + req.params.id });
});

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "post disliker  id : " + req.params.id });
});

module.exports = router;

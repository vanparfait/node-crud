const PostModel = require("../models/post.model");

module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};

module.exports.setPosts = async (req, res) => {
  if (!req.body.message || !req.body.author) {
    res
      .status(400)
      .json({ message: "Merci de fournir à la fois un message et un auteur" });
    return; // Ajout de ce return pour éviter l'exécution du reste de la fonction en cas d'erreur
  }

  try {
    const post = await PostModel.create({
      message: req.body.message,
      author: req.body.author,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      message: "Une erreur est survenue lors de la création de la publication",
      error: error.message,
    });
  }
};

module.exports.editPosts = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "ce post nexiste pas" });
  }
  const updaptePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });
  res.status(200).json(updaptePost);
};

module.exports.deletePost = async (req, res) => {
  const deletePost = await PostModel.findByIdAndDelete(req.params.id);

  if (!deletePost) {
    res.status(400).json({ message: "ce post nexiste pas" });
  }
  //await deletePost.findOneAndDelete();

  res.status(200).json("message supprime avec succes :" + req.params.id);
};

module.exports.likePosts = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports.likePosts = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports.disLikePosts = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(error);
  }
};

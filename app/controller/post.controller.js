const postModel = require("../../database/model/post.model");

class Post {
  static findPostByTitle = async (req, res) => {
    try {
      const post = await postModel.find({
        title: req.body.title,
        articleStatus: "accepted",
      });
      res.send({
        apiStatus: true,
        data: post,
        message: "posts by title returned",
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        data: e.message,
        message: "couldn't get the posts by title",
      });
    }
  };
  static findPostsByType = async (req, res) => {
    try {
      const posts = await postModel.find({
        title: req.body.title,
        articleStatus: "accepted",
      });
      res.send({
        apiStatus: true,
        data: posts,
        message: "posts by type returned",
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        data: e.message,
        message: "couldn't get the posts by type",
      });
    }
  };
}

module.exports = Post;

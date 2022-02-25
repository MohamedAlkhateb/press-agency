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
        message: "post by title returned",
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        data: e.message,
        message: "couldn't get the post by title",
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
// add comment, increament (number of viewers, number of )
module.exports = Post;

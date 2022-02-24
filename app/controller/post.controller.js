const postModel = require("../../database/model/post.model");

class Post {
  static deletePost = async (req, res) => {
    try {
      const post = await postModel.findOneAndDelete({
        authorId: req.user._id,
        _id: req.params.id,
      });
      res.send({ apiStatus: true, data: post, message: "deleted" });
    } catch (e) {
      res.send({
        apiStatus: false,
        data: e.message,
        message: "couldn't delete the post",
      });
    }
  };
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
  static findPostsByTitle = async (req, res) => {
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
  static allPendingPosts = async (req, res) => {
    try {
      const posts = await postModel.find({ articleStatus: "pending" });
      res.send({
        apiStatus: true,
        data: posts,
        message: "posts by type returned",
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        data: e.message,
        message: "couldn't get the pending posts",
      });
    }
  };
}
// add comment, increament (number of viewers, number of )
module.exports = Post;

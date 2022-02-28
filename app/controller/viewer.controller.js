const { json } = require("express/lib/response");
const postModel = require("../../database/model/post.model");
const { post } = require("../../routes/user.routes");

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
  static addComment = async (req, res) => {
    try {
      console.log(postModel);
      const posts = await postModel.find({
        _id: req.params.id,
      });
      posts[0].comments.push({
        userID: req.user._id,
        content: req.body.comment,
      });
      posts[0].save();
      res.send({
        apiStatus: true,
        data: posts,
        message: "comment added",
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        message: e.message,
      });
    }
  };
  static addlike = async (req, res) => {
    try {
      //get post data
      const posts = await postModel.findById(req.params.id);

      const liked = posts.likes.findIndex((like) =>
        like.userID.equals(req.user._id)
      );
      if (liked > -1) {
        posts.likes.splice(liked, 1);
        if(posts.numberOfLikes!=0){
        posts.numberOfLikes = posts.numberOfLikes-1}
      } else {
        posts.likes.push({
          userID: req.user._id,
        });
        posts.numberOfLikes = posts.numberOfLikes+1
      }
      
      await posts.save();

      res.send({
        apiStatus: true,
        data: posts,
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        message: e.message,
      });
    }
  };
}
// add comment, increament (number of viewers, number of )
module.exports = Post;

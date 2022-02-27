const postModel = require("../../database/model/post.model");

class Viewer {
  static showPost = async (req, res) => {
    try {
      const post = await postModel.findByIdAndUpdate(req.params.id, {number: numberOfLikes + 1});
      res.send({
        apiStatus: true,
        data: post,
        message: "post returned",
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        data: e.message,
        message: "couldn't get the post",
      });
    }
  };
}

module.exports = Viewer;

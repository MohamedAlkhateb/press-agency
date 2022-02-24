const userModel = require("../../database/model/user.model");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

class User {
  static register = async (req, res) => {
    try {
      const userData = new userModel(req.body);
      await userData.save();
      res.send({
        apiStatus: true,
        data: userData,
        message: "added",
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        data: e.message,
        message: "error adding user",
      });
    }
  };

  static login = async (req, res) => {
    try {
      const userData = await userModel.login(req.body.email, req.body.password);
      const token = await userData.generateToken();
      res.send({
        apiStatus: true,
        message: "logged in",
        data: { userData, token },
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        data: e.message,
        message: "failed",
      });
    }
  };
  static singleUser = async (req, res) => {
    res.send({ apiStatus: true, data: req.user, message: "data featched" });
  };

  static logout = async (req, res) => {
    // remove token
    try {
      req.user.tokens = req.user.tokens.filter((tok) => req.token != tok.token);
      await req.user.save();
      res.send({
        apiStatus: true,

        message: "logged out",
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        data: e.message,
        message: "failed loggout ",
      });
    }
  };

  static deleteSingleAcount = async (req, res) => {
    try {
      const user = await userModel.deleteOne({ id: req.user._id });
      res.send({
        apiStatus: true,
        data: user,
        message: "data deleted successfuly",
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        data: e.message,
        message: "error deleting user",
      });
    }
  };
  static edit = async (req, res) => {
    try {
      //recrypt the password again
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 8);
      }
      const userUpdated = await userModel.updateOne(
        { id: req.user._id },
        req.body,
        { upsert: false, runValidators: true }
      );

      res.send({
        apiStatus: true,
        data: userUpdated,
        message: "updates",
      });
    } catch (e) {
      res.send({
        apiStatus: false,
        message: e.message,
      });
    }
  };

  static uploadProfileImage = function () {
    upload.single("avatar");
    const f = function (req, res, next) {};
    f();
  };
}
module.exports = User;

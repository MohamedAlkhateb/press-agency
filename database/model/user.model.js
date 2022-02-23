const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      min: 3,
      max: 15,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
      min: 3,
      max: 15,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate(val) {
        if (!validator.isEmail(val)) throw new Error("Invalid email");
      },
    },
    image: {
      type: String,
    },
    otp: {
      type: String,
    },
    userRole: {
      type: String,
      enum: ["user", "editor", "user"],
      default: "user",
    },
    questions: [
      {
        sender: {
          type: String,
          trim: true,
          required: true,
        },
        content: {
          type: String,
          trim: true,
          required: true,
          min: 5,
          max: 100,
        },
        isAnswered: {
          type: Boolean,
          default: false,
        },
      },
    ],
    answers: [
      {
        reciever: {
          type: String,
          trim: true,
          required: true,
        },
        content: {
          type: String,
          trim: true,
          required: true,
          min: 2,
          max: 150,
        },
        isAnswerExist: {
          type: Boolean,
          default: false,
        },
      },
    ],
    tokens: [
      {
        token: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  { timeStamp: true }
);

const user = mongoose.model("user", userSchema);
module.exports = user;

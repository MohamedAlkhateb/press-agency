const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    articleType: {
      type: String,
      enum: ["sports", "cinema", "politics", "religion"],
      required: true,
    },
    articleStatus: {
      type: String,
      enum: ["accepted", "pending", "refused"],
      default: "pending",
    },
    image: {
      type: String,
    },
    numberOfViewers: {
      type: Number,
      default: 0,
    },
    numberOfLikes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "user",
        },
        type: String,
      },
    ],
  },
  { timeStamp: true }
);

const post = mongoose.model("post",postSchema)

module.exports= post
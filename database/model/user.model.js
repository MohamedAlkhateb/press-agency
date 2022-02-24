const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

let regex = new RegExp(
  /^(?!.\s)(?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.[~`!@#$%^&()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/
);

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
    password: {
      type: String,
      required: true,
      match: regex,
    },
    image: {
      type: String,
    },
    otp: {
      type: String,
    },
    userRole: {
      type: String,
      enum: ["user", "editor", "admin"],
      default: "user",
    },
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
// encrypt password , 8=> random number could be any number between  1 ~10
userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
});
userSchema.statics.login = async function () {
  const userData = await user.findOne({ email });
};
const user = mongoose.model("user", userSchema);
module.exports = user;

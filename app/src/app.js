const express = require("express");
require("dotenv").config();
var bodyParser = require("body-parser");
require("../../database/connection");
const multer = require("multer");
const userController = require("../controller/user.controller");
const viewerRoutes = require("../../routes/viewer.routes");
const editorRoutes = require("../../routes/editor.routes");
const adminRoutes = require("../../routes/admin.routes");
const userRoutes = require("../../routes/user.routes");
const postRoutes = require("../../routes/post.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);

app.post("/profile", userController.uploadProfileImage);
app.use("/api/post", postRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/editor", editorRoutes);

app.use("/api/viewer", viewerRoutes);

app.get("*", (req, res) => res.send({ error: "invalide url" }));

module.exports = app;

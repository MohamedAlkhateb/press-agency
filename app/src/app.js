const express = require("express");
// const multer = require("multer");
// const userController = require("../controller/user.controller");
// const viewerRoutes = require("../../routes/viewer.routes");
// const postRoutes = require("../../routes/post.routes");

const app = express();
require("dotenv").config();
require("../../database/connection");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("../../routes/user.routes");
app.use("/api/user", userRoutes);
const editorRoutes = require("../../routes/editor.routes");
app.use("/api/user/editor", editorRoutes);

// app.post("/profile", userController.uploadProfileImage);
// app.use("/api/post", postRoutes);

const adminRoutes = require("../../routes/admin.routes");
app.use("/api/user/admin", adminRoutes);

// app.use("/api/user/editor", editorRoutes);
// app.use("/api/user/viewer", viewerRoutes);

app.get("*", (req, res) => res.send({ error: "invalide url" }));

module.exports = app;

const express = require("express");
require("dotenv").config()

require("../../database/connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("../../routes/user.routes");
app.use("/api/user", userRoutes);
const postRoutes = require("../../routes/post.routes");
app.use("/api/post", postRoutes);
const adminRoutes = require("../../routes/admin.routes");
app.use("/api/admin", adminRoutes);
const editorRoutes = require("../../routes/editor.routes");
app.use("/api/editor", editorRoutes);
const viewerRoutes = require("../../routes/viewer.routes");
app.use("/api/viewer", viewerRoutes);

app.get("*", (req, res) => res.send({ error: "invalide url" }));

module.exports = app;

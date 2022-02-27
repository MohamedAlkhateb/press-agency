const router = require("express").Router();
const editorController = require("../app/controller/editor.controller");
const auth = require("../middleware/auth");
const editorAuth = require("../middleware/editorAuth");

router.post("/addPost", auth, editorAuth, editorController.addPost);
router.get("/showAllPosts", auth, editorAuth, editorController.allEditorPosts);
router.post("/updatePost/:id", auth, editorAuth, editorController.updatePost);
router.delete("/deletePost/:id", auth, editorAuth, editorController.deletePost);

module.exports = router;
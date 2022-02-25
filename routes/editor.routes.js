const router = require("express").Router();
const editorController = require("../app/controller/editor.controller");
const auth = require("../middleware/auth");
const editorAuth = require("../middleware/editorAuth");

router.post("/addPost", auth, editorAuth, editorController.addPost);
router.get("/showAllPosts", auth, editorAuth, editorController.allEditorPosts);
router.post("/updatePost/:id", auth, editorAuth, editorController.updatePost);
router.delete("/deletePost/:id", auth, editorAuth, editorController.deletePost);

module.exports = router;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE5MmM0MmE3OTdmNTkzZTVlMWQ2NWIiLCJpYXQiOjE2NDU4MTc2MjN9.8D3qiP2NK0c6T0KGxVGTtTmdukdrQRYqEAhijQb73K8
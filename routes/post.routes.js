const router = require("express").Router();
const postController = require("../app/controller/post.controller");
const auth = require("../middleware/auth");

router.post("/addPost", auth, postController.addPost);
router.delete("/delPost/:id", auth, postController.deletePost);

module.exports = router;

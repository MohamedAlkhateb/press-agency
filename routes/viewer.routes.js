const router = require("express").Router();
const viewerController = require("../app/controller/viewer.controller");
const auth = require("../middleware/auth");
const viewerAuth = require("../middleware/viewerAuth");

router.get("/showPost/:id", auth, viewerAuth, viewerController.showPost);

module.exports = router;

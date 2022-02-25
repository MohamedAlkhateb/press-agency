const router = require("express").Router();
const auth = require("../middleware/auth");
const userController = require("../app/controller/user.controller");
// router.post("/profile", userController.uploadProfileImage);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", auth, userController.logout);
router.get("/info", auth, userController.singleUser);
router.delete("/deleteAccount", auth, userController.deleteSingleAcount);
router.post("/edit", auth, userController.edit);

module.exports = router;

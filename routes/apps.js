const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../controllers/middleware");

const appController = require("../controllers/apps")

router.route("/")
.get(
    isLoggedIn,
    appController.renderIndex)

router.route("/messeges")
.get(appController.renderMesseges)

router.route("/likes")
.get(appController.renderLikes)

router.route("/profile")
.get(appController.renderProfile)


module.exports = router;

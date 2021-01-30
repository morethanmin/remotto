const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../controllers/middleware");

const appController = require("../controllers/apps")

router.route("/")
.get(
    isLoggedIn,
    appController.renderIndex)

router.route("/messeges")
.get(
    isLoggedIn,
    appController.renderMesseges)

router.route("/likes")
.get(
    isLoggedIn,
    appController.renderLikes)

router.route("/profile")
.get(
    isLoggedIn,
    appController.renderProfile)


module.exports = router;

const express = require("express");
const multer = require("multer");

const { storage } = require("../cloudinary");
const upload = multer({ storage });
const router = express.Router();

//const { isLoggedIn } = require("../controllers/middleware");
const appController = require("../controllers/apps");

// router.use(isLoggedIn);

router.route("/").get(appController.renderIndex);

router.route("/messeges").get(appController.renderMesseges);

router.route("/likes").get(appController.renderLikes);



module.exports = router;

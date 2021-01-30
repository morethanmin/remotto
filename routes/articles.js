const express = require("express");
const router = express.Router();

const articleController = require("../controllers/articles")

router.route("/")
.get(articleController.renderIndex)

module.exports = router;

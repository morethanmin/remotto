const express = require("express");
const multer = require("multer");

const { storage } = require("../cloudinary");
const upload = multer({ storage });
const router = express.Router();

const { isLoggedIn } = require("../controllers/middleware");
const articleController = require("../controllers/articles");


router
  .route("/new")
  .get(articleController.renderNew)
  .post(upload.single("aaaa"), articleController.createArticle);

router
  .route("/:id")
  .get(articleController.renderShow)
  .delete(articleController.deleteArticle);

router.route('/:id/edit')
.get(articleController.renderEdit)

module.exports = router;
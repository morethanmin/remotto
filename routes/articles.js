const express = require("express");
const multer = require("multer");

const { storage } = require("../cloudinary");
const upload = multer({ storage });
const router = express.Router();

const { isLoggedIn } = require("../controllers/middleware");
const articleController = require("../controllers/articles");

//router.use();

router.route("/new")
  .get(
        isLoggedIn,
        articleController.renderNew)
  .post(
        //isLoggedIn,
        upload.single("aaaa"),
        articleController.createArticle
);

router
  .route("/:id")
  .get(isLoggedIn, articleController.renderShow)
  .put(isLoggedIn, upload.single("aaaa"), articleController.updateArticle)
  .delete(isLoggedIn, articleController.deleteArticle);

router.route("/:id/edit").get(isLoggedIn, articleController.renderEdit);

module.exports = router;

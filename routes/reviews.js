const express = require("express");
const router = express.Router({ mergeParams: true }); // 
const reviewController = require("../controllers/reviews");

router.route("/")
.post(reviewController.createReview)

module.exports = router;

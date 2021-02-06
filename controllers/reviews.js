const reviewModel = require("../models/review");
const articleModel = require("../models/article");

module.exports.createReview = async (req, res) => {
  const article = await articleModel.findById(req.params.id); //.populate('author')
  const review = await new reviewModel(req.body.review);
  review.author = req.user._id;
  article.reviews.push(review);
  await review.save();
  await article.save();
  //console.log(req.user._id)
  res.redirect(`/${article._id}`);
};

module.exports.deleteReview = async (req,res) => {
  const {id, reviewId} = req.params
  // console.log(id + " and " + reviewId)
  await articleModel.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await reviewModel.findByIdAndDelete(reviewId);
  res.redirect(`/${id}`)
}
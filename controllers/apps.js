const userModel = require("../models/user");
const ArticleModel = require("../models/article");


module.exports.renderIndex = async (req,res) => {
    const articles = await ArticleModel.find({})
    .populate({
        path:"author",
        populate: { path: "image"}
    })
    //const author = await userModel.findById('article')
    console.log(articles[0].author)
    //로그인되어있을경우
    res.render("apps/index",{articles})
}

module.exports.renderMesseges = async (req,res) => {
    //로그인되어있을경우
    res.render("apps/messeges")
}

module.exports.renderLikes = async (req,res) => {
    //로그인되어있을경우
    res.render("apps/likes")
}


module.exports.renderNew = async (req,res) => {
    //로그인되어있을경우
    //console.log(req.user._id)
    res.render("apps/new")
}

module.exports.createArticle = async (req,res) => {
    // console.log(req.file);
    // console.log(req.body.article)
    //const {image, description} = req.body;
    const article = new ArticleModel(req.body.article)
    article.image = {
        url: req.file.path,
        filename: req.file.filename
    }
    article.author = req.user._id;
    await article.save();
    res.redirect('/')
}
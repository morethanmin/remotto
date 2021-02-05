const userModel = require("../models/user");
const articleModel = require("../models/article");


module.exports.renderIndex = async (req,res) => {
    const articles = await articleModel.find({})
    .populate({
        path:"author",
        populate: { path: "image"}
    })
    
    //const author = await userModel.findById('article')
    //  console.log(articles[4].likes.length)
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

module.exports.renderShow = async (req,res) => {
    
    const article = await articleModel.findById(req.params.id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate('author')
    //console.log(article)
    res.render("apps/show",{article})
}

module.exports.createArticle = async (req,res) => {
    // console.log(req.file);
    // console.log(req.body.article)
    //const {image, description} = req.body;
    const article = new articleModel(req.body.article)
    article.image = {
        url: req.file.path,
        filename: req.file.filename
    }
    article.author = req.user._id;
    await article.save();
    res.redirect('/')
}

module.exports.deleteArticle = async (req,res) => {
    //console.log(req.params)
    //const id = req.params;
    //const article = await articleModel.findById(req.params.id)

    await articleModel.findByIdAndDelete(req.params.id)
    res.redirect("/")
}

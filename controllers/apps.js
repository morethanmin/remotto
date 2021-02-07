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

module.exports.renderSetting = async (req,res) => {
    res.render("apps/setting")
}
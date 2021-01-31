const userModel = require("../models/user");




module.exports.renderIndex = async (req,res) => {
    //로그인되어있을경우
    res.render("apps/index")
}

module.exports.renderMesseges = async (req,res) => {
    //로그인되어있을경우
    res.render("apps/messeges")
}

module.exports.renderLikes = async (req,res) => {
    //로그인되어있을경우
    res.render("apps/likes")
}


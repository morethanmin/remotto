const userModel = require("../models/user");
const articleModel = require("../models/article");

module.exports.renderLogin = async (req,res) => {
    res.render("users/login")
}

module.exports.renderRegister = async (req,res) => {
    res.render("users/register")
}

module.exports.login = async (req,res) => {
    //이동
    res.redirect("/")
}

module.exports.logout = async (req,res) => {
    req.logout();
    //이동
    res.redirect("/login")
}

module.exports.register = async (req,res) => {
    try {
    const {email, username, password} = req.body;
    const user = new userModel({username,email});
    await userModel.register(user, password);
    res.redirect("/login");
    } catch(e) {
        console.log(e)
        res.redirect("/register");
        //console.log("error = " + e + "입니다.")  s
    }
}

module.exports.renderProfile = async (req,res) => {
    const user = await userModel.findOne({username:req.params.username})
    //console.log(user._id)
    const userId = user._id
    const userArticles = await articleModel.find({author:userId})
    //console.log(userArticles)
        //로그인되어있을경우
        res.render("users/profile",{user,userArticles})
    }
    


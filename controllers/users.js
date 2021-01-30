const User = require("../models/user");

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
    const user = new User({username,email});
    await User.register(user, password);
    res.redirect("/login");
    } catch(e) {
        res.redirect("/register");
        //console.log("error = " + e + "입니다.")
    }
}
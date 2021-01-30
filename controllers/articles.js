

module.exports.renderIndex = async (req,res) => {
    //로그인되어있을경우
    res.render("articles/index")
}
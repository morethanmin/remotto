const userModel = require("../models/user");
const articleModel = require("../models/article");
const { cloudinary} = require("../cloudinary");


module.exports.renderNew = async (req,res) => {
    //로그인되어있을경우
    //console.log(req.user._id)
    res.render("articles/new")
}

module.exports.renderShow = async (req,res) => {
    
    const article = await articleModel.findById(req.params.id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate('author')
    //console.log(article)
    res.render("articles/show",{article})
}

module.exports.renderEdit = async (req,res) => {
    const article = await articleModel.findById(req.params.id)
    //console.log(article)
    res.render("articles/edit",{article})
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
    res.redirect(`/${article._id}`)
}

module.exports.updateArticle = async(req,res) => {
    //console.log(req.file)
    const article = await articleModel.findByIdAndUpdate(req.params.id,{...req.body.article})
    if(typeof(req.file) !== 'undefined'){
        await cloudinary.uploader.destroy(article.image.filename);
        article.image = {
            url: req.file.path,
            filename: req.file.filename
        }
    }
    
    await article.save()
    res.redirect(`/${article._id}`)
    //await cloudinary.uploader.upload()

}

module.exports.deleteArticle = async (req,res) => {
    //console.log(req.params)
    //const id = req.params;
    const article = await articleModel.findById(req.params.id)
    await cloudinary.uploader.destroy(article.image.filename);
    await article.remove()
    //await articleModel.findByIdAndDelete(req.params.id)
    res.redirect("/")
}


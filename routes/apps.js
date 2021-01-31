const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../controllers/middleware");

const appController = require("../controllers/apps")

router.use(isLoggedIn)

router.use((req,res,next) => {
    res.locals.currentUser = req.user;
    // console.log(res.locals.currentUser)
    next();
})

router.route("/")
.get(
    appController.renderIndex)

router.route("/messeges")
.get(
    appController.renderMesseges)

router.route("/likes")
.get(
    appController.renderLikes)



// router.route("/:id")
// .get(
//     isLoggedIn,
//     appController.renderProfile
// )


module.exports = router;

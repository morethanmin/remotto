const express = require("express");
const passport = require("passport");
const router = express.Router();
const { isLoggedIn } = require("../controllers/middleware");

const userController = require("../controllers/users")



router.route("/login")
.get(
    //isNotLoggedIn,
    userController.renderLogin)
.post(
    passport.authenticate("local", {
        failureFlash: false,
        failureRedirect: "/login",
      }),
    userController.login)

router.route("/register")
.get(userController.renderRegister)
.post(userController.register)

router.route("/logout")
.post(userController.logout)

router.route("/user/:username")
.get(
    //isLoggedIn,
    userController.renderProfile)

module.exports = router;

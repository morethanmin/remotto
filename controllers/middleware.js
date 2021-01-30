module.exports.isLoggedIn = (req, res, next) => {
    //console.log(req.body)
    // console.log(!req.isAuthenticated())
  if (!req.isAuthenticated()) { // 로그인이 안되어 있다면
    //console.log(req.path, req.originalUrl)
    //req.session.returnTo = req.originalUrl;
    //req.flash("error", "you must be signed in");
    return res.redirect("/login");
  } else
  next();
};

module.exports.isNotLoggedIn = (req, res, next) => {
   // console.log(req.isAuthenticated())
  if (req.isAuthenticated()) {
    //console.log(req.path, req.originalUrl)
    //req.session.returnTo = req.originalUrl;
    //req.flash("error", "you must be signed in");
    return res.redirect("/");
  } else 
  next();
};

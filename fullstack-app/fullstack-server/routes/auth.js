const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// router.get("/login", (req, res, next) => {
//   res.render("auth/login", { "message": req.flash("error") });
// });

// router.post("/login", passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "/auth/login",
//   failureFlash: true,
//   passReqToCallback: true
// }));

router.post("/login", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === "" || password === "") {
        // res.render("auth/signup", { message: "Indicate username and password" });
        res.json({ success: false, message: "Indicate username and password" });
        return;
    }

    User.findOne({ username })
        .then((user) => {
            if (!user) {
                return res.json({
                    success: false,
                    message: "Wrong Credentials",
                });
            }

            bcrypt
                .compare(password, user.password)
                .then((samePassword) => {
                    if (!samePassword) {
                        return res.json({
                            success: false,
                            message: "Wrong Credentials",
                        });
                    }
                    req.login(user, () =>
                        res.json({ success: true, user: user })
                    );
                    // return res.json({ success: true, user: user });
                })
                .catch((err) =>
                    res.json({
                        error: err,
                        success: false,
                        message: "Error while attempting to log in",
                    })
                );
        })
        .catch((err) =>
            res.json({
                error: err,
                success: false,
                message: "Error while attempting to Find User",
            })
        );
});

// router.get("/signup", (req, res, next) => {
//   res.render("auth/signup");
// });

router.post("/signup", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === "" || password === "") {
        // res.render("auth/signup", { message: "Indicate username and password" });
        res.json({ success: false, message: "Indicate username and password" });
        return;
    }

    User.findOne({ username }, "username", (err, user) => {
        if (user !== null) {
            // res.render("auth/signup", { message: "The username already exists" });
            res.json({
                success: false,
                message: "The username already exists",
            });
            return;
        }

        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            password: hashPass,
        });

        newUser
            .save()
            .then((newlyCreatedUser) => {
                // res.redirect("/");
                res.json({ user: newlyCreatedUser, success: true });
            })
            .catch((err) => {
                // res.render("auth/signup", { message: "Something went wrong" });
                res.json({
                    error: err,
                    success: false,
                    message: "Something went wrong",
                });
            });
    });
});

router.get("/logout", (req, res) => {
    req.logout();
    // res.redirect("/");
    res.json({
        success: true,
        message: "User has been successfully logged out",
    });
});

module.exports = router;

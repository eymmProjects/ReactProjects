const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/login", async function (req, res) {
  try {
    const result = User.findOne({
      email: req.body.email,
      password: req.bodey.password,
    });

    if (result) {
      res.send(result);
    } else {
      res.status(500).json("Error");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/register", async function (req, res) {
  try {
    const newuser = new User(req.body);
    await newuser.save("User Registered Successfully");
    res.send("user regustered succesfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

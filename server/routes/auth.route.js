const express = require("express");
const { body } = require("express-validator");

const { createUser, logIn } = require("../controllers/auth.controllers");

const authRoute = express.Router();

authRoute.post(
  "/createuser",
  body("email", "enter valid email").isEmail(),
  body("password", "enter a valid password").isLength({ min: 8 }),
  createUser
);

authRoute.post(
  "/login",
  body("email", "enter a valid email").isEmail(),
  body("password", "password should not be empty").exists(),
  logIn
);

module.exports = {
  authRoute,
};

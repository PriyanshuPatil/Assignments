const express = require("express");
const { register, login, getUser, getSingleUser, updateUser, deleteUser } = require("../controller/user.controller");
const usersRouter = express.Router();

// To login/generate a new token.
usersRouter.post("/login", login);

// To get user data.
usersRouter.get("/", getUser);

// To register a new user.
usersRouter.post("/", register);

// To get single user data.
usersRouter.get("/:id", getSingleUser);

// To update single user data.
usersRouter.patch("/:id", updateUser);

// To delete single user data.
usersRouter.delete("/:id", deleteUser);

module.exports = { usersRouter};
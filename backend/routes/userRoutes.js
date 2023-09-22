const { registerUser, authUser } = require("../controllers/userController");
const express = require("express");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
module.exports = router;

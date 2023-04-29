const express = require("express");
const { createUser, loginUserCtrl } = require("../controller/userController");
const router = express.Router();

router.post("/register", createUser);
router.get("/login", loginUserCtrl);

module.exports = router;

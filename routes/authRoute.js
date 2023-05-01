const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUser,
  getUser,
} = require("../controller/userController");
const router = express.Router();

router.post("/register", createUser);
router.get("/login", loginUserCtrl);
router.get("/all-users", getAllUser);
router.get("/:id", getUser);

module.exports = router;

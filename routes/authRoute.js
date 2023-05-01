const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUser,
  getUser,
  deleteUser,
} = require("../controller/userController");
const router = express.Router();

router.post("/register", createUser);
router.get("/login", loginUserCtrl);
router.get("/all-users", getAllUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);

module.exports = router;

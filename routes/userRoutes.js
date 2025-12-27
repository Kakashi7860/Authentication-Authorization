const express = require("express");
const router = express.Router();

const {
  loginUser,
  profile,
  adminData
} = require("../controller/userController");

const {
  protect,
  isAdmin
} = require("../middleware/authMiddleware");

router.post("/login", loginUser);
router.get("/profile", protect, profile);
router.get("/admin", protect, isAdmin, adminData);

module.exports = router;
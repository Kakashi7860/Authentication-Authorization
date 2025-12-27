const express = require("express");
const { getUsers } = require("../controller/userController");
const router = express.router();

router.get("/",getUsers)

module.exports=router;
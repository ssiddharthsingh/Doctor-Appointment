const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/getUsers", userController.getUsers);

router.get("/getUserbyEmail", userController.getUser);

router.post("/createUser", userController.createUser);

router.put("/updateUser", userController.updateUser);

router.delete("/deleteUser", userController.deleteUser);

router.get("/getDoctors", userController.getDoctors)

module.exports = router;

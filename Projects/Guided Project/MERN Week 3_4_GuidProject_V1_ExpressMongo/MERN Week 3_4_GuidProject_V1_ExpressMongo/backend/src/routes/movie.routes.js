const express = require("express");
const router = require.Router();

const {protect} = require("../middleware/auth.middleware");
const {authorize} = require("../middleware/role.middleware");

// Public Route
router.get("/",(req,res)=>{
    res.send("Get Movies");
});

// Admin Only Route
router.post("/",protect,authorize("admin"),(req,res)=>{
    res.send("Create Movie");
});
module.exports = router;
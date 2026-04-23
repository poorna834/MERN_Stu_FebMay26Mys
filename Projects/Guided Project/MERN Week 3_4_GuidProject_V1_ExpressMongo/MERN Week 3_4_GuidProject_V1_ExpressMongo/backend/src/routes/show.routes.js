const express = require("express");
const router = express.Router();
const showController = require("../controllers/show.controller");
const {protect} = require("../middleware/auth.middleware");
const {authorize} = require("../middleware/role.middleware");

// Public Route
router.get("/",showController.getShows);
router.get("/",showController.getShowById);

// Admin Only Route
router.post("/",protect,authorize("admin"),showController.createShow);
router.put("/:id",protect,authorize("admin"),showController.updateShow);
router.delete("/:id",protect,authorize("admin"),showController.deleteShow);
module.exports = router;
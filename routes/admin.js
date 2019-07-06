const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.post("/bot-messages", adminController.postBotMessage);

module.exports = router;

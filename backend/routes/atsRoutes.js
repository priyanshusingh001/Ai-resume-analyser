const express = require("express");

const {
  calculateATS,
  calculateAIATS
} = require("../controllers/atsController");

const router = express.Router();

router.post(
  "/score",
  calculateATS
);

router.post(
  "/ai-score",
  calculateAIATS
);

module.exports = router;
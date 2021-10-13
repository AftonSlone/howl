const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { City } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const states = await State.findAll();
    res.json(states);
  })
);

module.exports = router;

const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Business } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const business = await Business.findAll();

    res.json(business);
  })
);

module.exports = router;

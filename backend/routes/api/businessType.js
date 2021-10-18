const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { BusinesType } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const types = await BusinesType.findAll({
      order: [["name", "ASC"]],
      attributes: ["id", "name"],
    });
    res.json(types);
  })
);

module.exports = router;

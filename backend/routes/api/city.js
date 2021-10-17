const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { City } = require("../../db/models");

const router = express.Router();

router.get(
  "/state/:stateId",
  asyncHandler(async (req, res, next) => {
    const { stateId } = req.params;
    const cities = await City.findAll({
      where: { stateId },
      order: [["name", "ASC"]],
      attributes: ["id", "name"],
    });
    res.json(cities);
  })
);

module.exports = router;

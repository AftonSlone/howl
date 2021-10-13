const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Business, Hours } = require("../../db/models");

const router = express.Router();

router.get(
  "/type/:typeId",
  asyncHandler(async (req, res, next) => {
    const { typeId } = req.params;
    const business = await Business.findAll({
      where: { typeId },
      include: [Hours],
    });

    res.json(business);
  })
);

router.get(
  "/type/:typeId/state/:stateId",
  asyncHandler(async (req, res, next) => {
    const { typeId, stateId } = req.params;
    const business = await Business.findAll({
      where: { typeId, stateId },
      include: [Hours],
    });

    res.json(business);
  })
);

router.get(
  "/type/:typeId/state/:stateId/city/:cityId",
  asyncHandler(async (req, res, next) => {
    const { typeId, stateId, cityId } = req.params;
    const business = await Business.findAll({
      where: { typeId, stateId, cityId },
      include: [Hours],
    });

    res.json(business);
  })
);

module.exports = router;

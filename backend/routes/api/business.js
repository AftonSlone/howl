const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const {
  Business,
  Hours,
  Review,
  BusinesType,
  City,
  State,
} = require("../../db/models");

const router = express.Router();

const validateNewBusiness = [
  check("name")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please provide a valid name."),
  check("typeId")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid Business Type."),
  check("loc")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid location"),
  check("loc")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please provide a valid location"),
  check("stateId")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid State"),
  check("cityId")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid City"),
  check("street")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please provide a valid Street"),
  check("info")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please complete info section"),
  handleValidationErrors,
];

router.get(
  "/:businessId",
  asyncHandler(async (req, res, next) => {
    const { businessId } = req.params;
    const business = await Business.findByPk(businessId, {
      include: [Hours, Review, City, State, BusinesType],
    });
    res.json(business);
  })
);

router.get(
  "/user/:ownerId",
  asyncHandler(async (req, res, next) => {
    const { ownerId } = req.params;
    const business = await Business.findAll({
      where: { ownerId },
      include: [Hours, Review, City, State, BusinesType],
    });

    res.json(business);
  })
);

router.get(
  "/type/:typeId",
  asyncHandler(async (req, res, next) => {
    const { typeId } = req.params;
    const business = await Business.findAll({
      where: { typeId },
      include: [Hours, Review, City, State, BusinesType],
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
      include: [Hours, Review, City, State, BusinesType],
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
      include: [Hours, Review, City, State, BusinesType],
    });

    res.json(business);
  })
);

router.get(
  "/state/:stateId/city/:cityId",
  asyncHandler(async (req, res, next) => {
    const { stateId, cityId } = req.params;
    const business = await Business.findAll({
      where: { stateId, cityId },
      include: [Hours, Review, City, State, BusinesType],
    });

    res.json(business);
  })
);

router.get(
  "/state/:stateId",
  asyncHandler(async (req, res, next) => {
    const { stateId } = req.params;
    const business = await Business.findAll({
      where: { stateId },
      include: [Hours, Review, City, State, BusinesType],
    });

    res.json(business);
  })
);

router.post(
  "/",
  requireAuth,
  validateNewBusiness,
  asyncHandler(async (req, res, next) => {
    const { name, typeId, ownerId, loc, stateId, cityId, street, info } =
      req.body;
    const business = await Business.create({
      name,
      typeId,
      ownerId,
      loc,
      stateId,
      cityId,
      street,
      info,
    });

    res.json(business);
  })
);

router.put(
  "/:businessId",
  requireAuth,
  validateNewBusiness,
  asyncHandler(async (req, res, next) => {
    const { businessId } = req.params;
    const { name, typeId, ownerId, loc, stateId, cityId, street, info } =
      req.body;
    const business = await Business.findByPk(businessId);

    await business.update({
      name,
      typeId,
      ownerId,
      loc,
      stateId,
      cityId,
      street,
      info,
    });

    res.json(business);
  })
);

router.delete(
  "/:businessId",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { businessId } = req.params;
    await Hours.destroy({
      where: { businessId },
    });

    await Review.destroy({
      where: { businessId },
    });
    const business = await Business.findByPk(businessId);

    if (business) business.destroy();

    res.status = 204;
    res.json();
  })
);

module.exports = router;

const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Review } = require("../../db/models");

const router = express.Router();

const validateNewReview = [
  check("text")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please complete Review section"),
  check("rating")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a rating"),
  handleValidationErrors,
];

router.post(
  "/",
  requireAuth,
  validateNewReview,
  asyncHandler(async (req, res, next) => {
    const { userId, businessId, rating, text } = req.body;
    const review = await Review.create({
      userId,
      businessId,
      rating,
      text,
    });

    res.json(review);
  })
);
module.exports = router;

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

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { userId } = req.body;

    const review = await Review.findByPk(id);
    if (review.userId === userId) {
      review.destroy();
      res.status = 204;
      res.json();
    }
  })
);

router.put(
  "/:id",
  requireAuth,
  validateNewReview,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { userId, rating, text } = req.body;
    const review = await Review.findByPk(id);
    if (review.userId === userId) {
      review.update({ rating, text });
      res.status = 200;
      res.json(review);
    }
  })
);

module.exports = router;

const express = require("express");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { User } = require("../../db/models");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, businessAccount } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    const data = await User.create({
      username,
      email,
      hashedPassword,
      businessAccount,
    });

    const user = {
      id: data.id,
      businessAccount: data.businessAccount,
      email: data.email,
      username: data.username,
    };

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

router.get("/:id",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: ["id", "username", "email"],
    });
    res.json(user);
  })
);

module.exports = router;

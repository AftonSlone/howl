const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const businessRouter = require("./business.js");
const stateRouter = require("./state");
const cityRouter = require("./city");
const businessTypeRouter = require("./businessType");
const reviewRouter = require("./review");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/business", businessRouter);

router.use("/states", stateRouter);

router.use("/cities", cityRouter);

router.use("/business-types", businessTypeRouter);

router.use("/reviews", reviewRouter);

module.exports = router;

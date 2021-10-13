const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const businessRouter = require("./business.js");
const stateRouter = require("./state");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/business", businessRouter);

router.use("/states", stateRouter);

module.exports = router;

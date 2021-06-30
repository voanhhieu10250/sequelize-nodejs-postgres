const express = require("express");
const studentRouter = require("./student.router");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("test success");
});

router.use("/students", studentRouter);

module.exports = router;

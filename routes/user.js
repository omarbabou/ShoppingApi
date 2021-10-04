const router = require("express").Router();

router.get("/usertest", (req, res) => {
  console.log("router");
  res.send("user test is successfull");
});

module.exports = router;

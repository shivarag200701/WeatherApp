const express = require("express");
const router = express.Router();

router.get("/weather", (req, res) => {
  //Call Weather API
  res.status(200).json({ message: "Weather Route" });
});

module.exports = router;

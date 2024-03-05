var express = require("express");
const router = express.Router();
const urlModel = require("../models/url_model");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const allUrls = await urlModel.find({});
  res.render("homePage");
});

module.exports = router;

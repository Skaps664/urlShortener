var express = require("express");
const router = express.Router();
const urlModel = require("../models/url_model");

const {
  handleGenerateNewShortURL,
  handelAnalytics,
} = require("../controller/url_controller");

/* GET users listing. */
router.post("/", handleGenerateNewShortURL);

router.get("/:shortId", async function (req, res) {
  var shortId = req.params.shortId;
  const entry = await urlModel.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        totalClicks: { timestamps: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});

// router.get("/analytics/:shortId", handelAnalytics);

module.exports = router;

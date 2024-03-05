const { nanoid } = require("nanoid");
const urlModel = require("../models/url_model");
const { response } = require("express");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  var shortURL = nanoid(8);

  urlModel.create({
    shortId: shortURL,
    redirectUrl: body.url,
    totalClicks: [],
  });

  return res.json({ id: shortURL });
}

async function handelAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await urlModel.findOne({ shortId });
  return res.json({
    totalClicks: result.totalClicks.length,
    Analytics: result.totalClicks,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handelAnalytics,
};

const { nanoid } = require("nanoid");
const urlModel = require("../models/url_model");
const { response } = require("express");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.statusCode(400).json({});
  }
  var shortURL = nanoid(8);
  urlModel.create({
    shortId: shortURL,
    redirectUrl: body.url,
    totalClicks: [],
  });

  return res.json({ id: shortId });
}

module.exports = {
  handleGenerateNewShortURL,
};

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/url_shortener");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    totalClicks: [{ timeStamp: { type: Number } }],
  },
  { timeStamp: true }
);

module.exports = mongoose.model("url_model", urlSchema);

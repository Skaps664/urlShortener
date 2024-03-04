const mongoose = require("mongoose");

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

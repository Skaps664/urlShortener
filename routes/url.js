var express = require("express");
const router = express.Router();

const { handleGenerateNewShortURL } = require("../controller/url_controller");

/* GET users listing. */
router.post("/", handleGenerateNewShortURL);

module.exports = router;

const express = require("express");
const { fibo, even, rand, prime } = require("../controllers/numController");

const router = express.Router();

router.route("/f").get(fibo);
router.route("/e").get(even);
router.route("/p").get(prime);
router.route("/r").get(rand);

module.exports = router;

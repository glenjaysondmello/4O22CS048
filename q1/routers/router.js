const express = require("express");
const { fetchFibo } = require("../services/fibo");
const { fetchEven } = require("../services/even");
const { fetchRandom } = require("../services/random");
const { fetchPrime } = require("../services/prime");

const router = express.Router();

router.post("/f", fetchFibo);
router.get("/fe", fetchEven);
router.get("/r", fetchRandom);
router.get("/p", fetchPrime);

module.exports = router;

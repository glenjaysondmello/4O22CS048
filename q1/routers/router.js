const express = require("express");
const { fibo, even, rand, prime } = require("../controllers/numController");

const router = express.Router();

router.post("/f", fibo);
router.get("/e", even);
router.get("/r", rand);
router.get("/p", prime);

module.exports = router;

const { fetchFibo } = require("../services/fibo");
const { fetchEven } = require("../services/even");
const { fetchRandom } = require("../services/random");
const { fetchPrime } = require("../services/prime");
const window = require("../utils/window");

const fibo = async (req, res) => {
  try {
    const nums = await fetchFibo();

    added = window.add(nums);
    avg = window.avg(nums);

    return res.json({
      windowCurrentState: nums,
      added: added,
      avg: avg,
    });
  } catch (error) {
    console.error(error);
  }
};

const rand = async (req, res) => {
  try {
    const nums = await fetchRandom();

    added = window.add(nums);
    avg = window.avg(nums);

    return res.json({
      windowCurrentState: nums,
      added: added,
      avg: avg,
    });
  } catch (error) {
    console.error(error);
  }
};

const even = async (req, res) => {
  try {
    const nums = await fetchEven();

    added = window.add(nums);
    avg = window.avg(nums);

    return res.json({
      windowCurrentState: nums,
      added: added,
      avg: avg,
    });
  } catch (error) {
    console.error(error);
  }
};

const prime = async (req, res) => {
  try {
    const nums = await fetchPrime();

    added = window.add(nums);
    avg = window.avg(nums);

    return res.json({
      windowCurrentState: nums,
      added: added,
      avg: avg,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { fibo, even, rand, prime };

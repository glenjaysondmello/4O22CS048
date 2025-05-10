const axios = require("axios");

const fetchPrime = async () => {
  const response = await axios.get(
    "http://20.244.56.144/evaluation-service/primes",
    {
      timeout: 500,
    }
  );

  return response.data;
};

module.exports = { fetchPrime };

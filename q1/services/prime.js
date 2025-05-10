const axios = require("axios");

const fetchPrime = async () => {
  try {
    const response = await axios.get(
      "http://20.244.56.144/evaluation-service/prime",
      { timeout: 500 }
    );
    return response.data.numbers;
  } catch (error) {
    console.error("Error fetching even numbers:", error);
    return [];
  }
};

module.exports = { fetchPrime };

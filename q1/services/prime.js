const axios = require("axios");
const window = require("../utils/window");

const fetchPrime = async () => {
  try {
    const response = await axios.get(
      "http://20.244.56.144/evaluation-service/prime",
      {
        timeout: 500,
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { fetchPrime };

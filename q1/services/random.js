const axios = require("axios");

const fetchRandom = async () => {
  const response = await axios.get(
    "http://20.244.56.144/evaluation-service/random",
    {
      timeout: 500,
    }
  );

  return response.data;
};

module.exports = { fetchRandom };

const axios = require("axios");

const fetchFibo = async () => {
  const response = await axios.get(
    "http://20.244.56.144/evaluation-service/fibo",
    {
      timeout: 500,
    }
  );

  return response.data;
};

module.exports = { fetchFibo };

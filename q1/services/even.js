const axios = require("axios");

const fetchEven = async () => {
  const response = await axios.get(
    "http://20.244.56.144/evaluation-service/even",
    {
      timeout: 500,
    }
  );

  return response.data;
};

module.exports = { fetchEven };

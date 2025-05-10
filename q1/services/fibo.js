const axios = require("axios");
const window = require("../utils/window");

const fetchFibo = async () => {
  const response = await axios.get(
    "http://20.244.56.144/evaluation-service/fibo",
    {
      timeout: 500,
    }
  );

  added = window.add(response.data.numbers);

  return added;
};

module.exports = { fetchFibo };

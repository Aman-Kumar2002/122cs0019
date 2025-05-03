const axios = require("axios");

const fetchNumbers = async (url) => {
  try {
    const response = await axios.get(url, { timeout: 500 });
    if (response.data && Array.isArray(response.data.numbers)) {
      return response.data.numbers;
    }
  } catch (err) {
    console.error("Error fetching numbers:", err.message);
  }
  return [];
};

module.exports = fetchNumbers;

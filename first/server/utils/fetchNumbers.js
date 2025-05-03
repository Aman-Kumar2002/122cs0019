const axios = require("axios");

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2MjgzNTI5LCJpYXQiOjE3NDYyODMyMjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjllZmEyYmY4LTUwNzktNDkxMy1hODg3LWMwMjE3NWZmNGY5YyIsInN1YiI6IjEyMmNzMDAxOUBpaWl0ay5hYy5pbiJ9LCJlbWFpbCI6IjEyMmNzMDAxOUBpaWl0ay5hYy5pbiIsIm5hbWUiOiJhbWFuIGt1bWFyIiwicm9sbE5vIjoiMTIyY3MwMDE5IiwiYWNjZXNzQ29kZSI6ImJ6YkNueiIsImNsaWVudElEIjoiOWVmYTJiZjgtNTA3OS00OTEzLWE4ODctYzAyMTc1ZmY0ZjljIiwiY2xpZW50U2VjcmV0IjoiUWFDc0RQRkhTWGFtdGN1WiJ9.7sCbxVxnocLGN0RAcr0nDBiAj2uC0wB_AQN_AqaydIA";

const fetchNumbers = async (url) => {
  try {
    const response = await axios.get(url, {
      timeout: 500,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.data && Array.isArray(response.data.numbers)) {
      return response.data.numbers;
    }
  } catch (err) {
    console.error("Error fetching numbers:", err.message);
  }
  return [];
};

module.exports = fetchNumbers;

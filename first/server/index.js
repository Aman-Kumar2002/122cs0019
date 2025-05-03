const express = require("express");
const fetchNumbers = require("./utils/fetchNumbers");
const { WINDOW_SIZE, TEST_API_URLS } = require("./config");

const app = express();
const PORT = 9876;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

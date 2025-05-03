const express = require("express");
const fetchNumbers = require("./utils/fetchNumbers");
const { WINDOW_SIZE, TEST_API_URLS } = require("./config");

const app = express();
const PORT = 9876;

let numberWindow = [];

app.get("/numbers/:numberid", async (req, res) => {
  const { numberid } = req.params;
  const url = TEST_API_URLS[numberid];

  if (!url) return res.status(400).json({ error: "Invalid number ID" });

  const prevState = [...numberWindow];

  const newNumbers = await fetchNumbers(url);
  newNumbers.forEach(num => {
    if (!numberWindow.includes(num)) {
      numberWindow.push(num);
      if (numberWindow.length > WINDOW_SIZE) {
        numberWindow.shift();
      }
    }
  });

  const avg =
    numberWindow.length > 0
      ? (
          numberWindow.reduce((sum, n) => sum + n, 0) /
          numberWindow.length
        ).toFixed(2)
      : 0;

  res.json({
    windowPrevState: prevState,
    windowCurrState: [...numberWindow],
    numbers: newNumbers,
    avg: parseFloat(avg),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

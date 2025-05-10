const express = require("express");

const app = express();

// app.use("numbers");

app.listen(9876, () => {
  console.log("Server is running on port 9876");
});

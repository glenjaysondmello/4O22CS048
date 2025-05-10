const express = require("express");

const app = express();

const router = require("./routers/router");

app.use("/numbers", router);

app.listen(9876, () => {
  console.log("Server is running on port 9876");
});

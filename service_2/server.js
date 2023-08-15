require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/get-token", (req, res, next) => {
  return res.status(200).json({ token: "123@123@" });
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

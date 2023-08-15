require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const axios = require("axios");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/auth", async (req, res, next) => {
  const respose = await axios.post(`${process.env.TOKEN_SERVER_URL}/get-token`);
  const { data } = respose;
  return res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

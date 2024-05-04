const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const orderRouter = require("./routes/order-routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/apii", orderRouter);
mongoose
  .connect("mongodb://localhost:27017/order")
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

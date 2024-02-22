const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const productRouter = require("./api/routes/products");
const orderRouter = require("./api/routes/orders");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-with, Content-Type, Accept, Authorization"
  );
  if (req.method === "Options") {
    res.header("Access-Control-Allow-Methods", "PUT ,PATCH, DELETE ,POST, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;

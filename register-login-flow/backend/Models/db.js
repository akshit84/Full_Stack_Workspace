const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/reg-login-flow")
  .then(() => {
    console.log("MongoDB connection Successfull");
  })
  .catch((err) => {
    console.log("MongoDB connection error...", err);
  });

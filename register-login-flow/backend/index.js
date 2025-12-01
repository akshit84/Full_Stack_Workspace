const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
const AuthRouter = require('./Routes/AuthRoute')


require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use(bodyParser.json())
app.use(cors())
app.use('/auth',AuthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

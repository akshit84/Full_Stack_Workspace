const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const AuthRouter = require("./Routes/AuthRoute");
const blogRoutes = require("./Routes/BlogRoutes");
const userRoutes = require("./Routes/UserRoutes");

require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/admin", userRoutes);
app.use("/user", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

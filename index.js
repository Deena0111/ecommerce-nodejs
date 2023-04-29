//get express modules
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const dbConnect = require("./config/dbconnect");
dbConnect();
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
app.use(bodyParser.json());
app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

//create server using express js
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

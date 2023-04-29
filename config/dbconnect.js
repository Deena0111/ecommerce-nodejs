//require modules
const { default: mongoose } = require("mongoose");
//db configuration
const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected successfully");
  } catch (error) {
    console.log("Database error");
  }
};
module.exports = dbConnect;

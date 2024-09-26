const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

// Middleware for body parser
app.use(express.json());

// Connect to MongoDB
const connectDB = require("./src/config/db");
connectDB();
// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/api/user", require("./src/routes/userRoute"));
app.use("/api/profile", require("./src/routes/userProfileroute"));
app.use("/api/posts", require("./src/routes/postRoute"));
app.use("/api/category", require("./src/routes/categoryRoute"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
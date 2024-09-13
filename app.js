const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const port=process.env.PORT;

// connect mongodb
const connectDB=require("./src/config/db");
connectDB ();

// Middleware for body parser
app.use(express.json());

app.use("/api/user", require("./src/routes/userRoutes"));

app.listen(port, ()=>{
 console.log(`server is running on port ${port}`);
});
const express = require ("express");
const cnx = require("./config/dbConnect");
const userRouter = require("./routes/userRoute");
const app = express ();
require("dotenv").config();

const port = process.env.PORT;
cnx();
app.use("/api",userRouter)
app.listen(port,(err)=>{
    if (err){
        console.error(err);
    } else {
        console.log(`Server connected on port: ${port}`);
    }
})
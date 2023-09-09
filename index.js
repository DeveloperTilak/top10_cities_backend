const express = require("express");
const { connect } = require("./config/db");

const app = express();
app.use(express.json())


app.get("/cities", (req, res) => {
  res.send("This is homepage.");
});


app.post("/cities/add", async(req, res)=>{
    
    console.log(req.body);
    res.send("added")
    
})





app.use( (req, res)=>{
    res.status(404).send("The URL or Method, not exist Please try again.")
})


let PORT = 3000;
app.listen(PORT, async () => {
  try {
    await connect;
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log("Error while connecting to database.", error);
  }
  console.log(`Server started at PORT ${PORT}`);
});

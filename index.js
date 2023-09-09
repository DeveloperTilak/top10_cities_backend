const express = require("express");
const cors = require('cors')

const { connect } = require("./config/db");
const { CityModel } = require("./model/description.model");

const app = express();
app.use(express.json());


const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:5173/'];

const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,  
};

//CORS middleware to allow specified options
app.use(cors(corsOptions));




app.get("/cities", async (req, res) => {
  try {

    const cities = await CityModel.find({})

    res.status(200).send(cities);
  } catch (error) {
    console.log("Error while getting the data from db.");
    res
      .status(500)
      .send({ message: "Error while getting the data from db.", error: error });
  }
});

app.post("/cities/add", async (req, res) => {
  try {
    // console.log(req.body);
    const new_city = new CityModel(req.body);

    await new_city.save();

    res.status(200).send("New city added successfully.");
  } catch (error) {
    console.log("Error while adding the data into db.");
    res
      .status(500)
      .send({ message: "Error while adding the data into db.", error: error });
  }
});

app.use((req, res) => {
  res.status(404).send("The URL or Method, not exist Please try again.");
});

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

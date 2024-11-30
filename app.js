const express = require("express");
const mongoose = require("mongoose");

const maintrecord = require("./models/maintrecord")

mongoose.connect("mongodb+srv://ahmed:ahmed123@project.3g8ge.mongodb.net/?retryWrites=true&w=majority&appName=Project").then(() =>{
console.log("connected")
}).catch((error) => {
    console.log("Error connecting DB",error)
})
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Nothing");
});

app.get("/table", (req, res) => {
    const name = req.query.name

    res.render("maintenance.ejs",{
        name: `${name}`
    }
    )
});

app.listen(8000, () => {
    console.log("iam listeing in port 8000")
});

app.post("/addrecord", async (req, res) => {
    const newmaintrecord = new maintrecord();
    const maintDate = req.body.maintDate;
    const maintCar = req.body.maintCar;
    const maintType = req.body.maintType;
    const maintKilometers = req.body.maintKilometers;
    const maintCost = req.body.maintCost;

    newmaintrecord.Date = maintDate
    newmaintrecord.Car = maintCar
    newmaintrecord.Type = maintType
    newmaintrecord.Kilometers = maintKilometers
    newmaintrecord.Cost = maintCost
    await newmaintrecord.save();
    res.send("record stored")
})

app.get("/showrecords", async (req, res) => {
    const records = await maintrecord.find()
    res.render("recordstable.ejs", {
        allrecords: records
    })

})
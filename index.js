const express = require("express");
const cors = require("cors");
const app = express();

const chefRecipeData = require("./data/chefRecipeData.json");
const recipeTutorialsData = require("./data/recipeTutorials.json");
const recipeBooksData = require("./data/booksData.json");
const port = process.env.PORT || 5000;

app.use(cors());

// home page
app.get("/", (req, res) => {
    res.send("welcome to chef recipe server");
});

// send all data
app.get("/chef-recipe", (req, res) => {
    res.send(chefRecipeData);
});

// send specific data
app.get("/chef-recipe/:id", (req, res) => {
    const id = req.params.id;
    const recipe = chefRecipeData.find(e => e.id === parseInt(id));
    res.send(recipe);
});

// data for recipe video tutorial
app.get("/recipe-tutorials", (req, res) => {
    res.send(recipeTutorialsData);
});

// data for recipe book
app.get("/recipe-books", (req, res) => {
    res.send(recipeBooksData);
});

app.listen(port, () => {
    console.log(`chef recipe listening on port: ${port}`);
});
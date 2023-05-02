const express = require("express");
const cors = require("cors");
const app = express();

const chefRecipeData = require("./data/chefRecipeData.json");

const port = process.env.PORT || 5000;

app.use(cors());

// home page
app.get("/", (req, res) => {
    res.send("welcome to chef recipe server");
});



app.listen(port, () => {
    console.log(`chef recipe listening on port ${port}`);
});
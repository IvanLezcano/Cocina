const express = require("express");
const app = express();
const path = require("path");
const views = path.join(__dirname,"views")
app.use(express.static("public"));
console.log(__dirname);

require("dotenv").config();


const port = process.env.PORT || 3030;


app.get("/",(req,res) => res.sendFile(path.join(views,"index.html")))


app.listen(port, () => {
    console.log(`Server is running on the port ${port}.`);
  });
  
  

//npx nodemon app.js para ejecutarlo
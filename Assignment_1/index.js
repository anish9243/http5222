const express = require("express");
const path = require("path"); //needed when setting up static/file paths
const dotenv = require("dotenv");

//Load the environment variables from .env
dotenv.config();

const db = require("./modules/groceries/db"); //load db.js

//set up the Express app
const app = express();
const port = process.env.PORT || "8888";

//set up application template engine
app.set("views", path.join(__dirname, "views")); //the first "views" is the setting name
//the second value above is the path: __dirname/views
app.set("view engine", "pug");

//set up folder for static files
app.use(express.static(path.join(__dirname, "public")));

//USE PAGE ROUTES FROM ROUTER(S)
app.get("/", async (request, response) => {
  let groceryList = await db.getGroceries();
  //if there's nothing in the groceries collection, initialize with some content then get the groceries again
  if (!groceryList.length) {
    await db.initializeGroceries(); //load data into groceries
    groceryList = await db.getGroceries();
  }
  //console.log(groceryList);
  response.render("index", { groceries: groceryList });
});

// Fruits & Vegetables page route
app.get("/fruits-vegetables", async (request, response) => {
  let fruitsAndVegetables = await db.getFruitsAndVegetables();
  response.render("fruits_vegetables", { fruitsAndVegetables });
});

// Route to add a new product (GET request)
app.get("/admin/add/product", async (request, response) => {
  const { name, brand, price, rating } = request.query;

  // Validate input (you can add more validation as needed)
  if (!name || !price || !brand || !rating) {
    return response.status(400).send("Name, brand, price, and rating are required.");
  }

  try {
    await db.addGrocery(name, brand, parseFloat(price), rating); // Add the product to the database
    response.redirect("/"); // Redirect to home page after adding
  } catch (error) {
    console.error("Error adding product:", error);
    response.status(500).send("Error adding product. Please try again later.");
  }
});

// About page route
app.get("/about", (request, response) => {
  response.render("about");
});

// Contact page route
app.get("/contact", (request, response) => {
  response.render("contact");
});

// Render form to add a product
app.get("/admin/add", (request, response) => {
  response.render("admin_add");
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
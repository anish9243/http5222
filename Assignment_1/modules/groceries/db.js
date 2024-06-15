const mongoose = require("mongoose"); //import Mongoose

//const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?authSource=testdb`;
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

//set up Schema and model
const GrocerySchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  rating: String,
});
const Grocery = mongoose.model("Grocery", GrocerySchema);

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}

//Get all Groceries from the Groceries collection
async function getGroceries() {
  await connect();
  return await Grocery.find({}).sort({}); //return array for find all
}

//Initialize Groceries collection with some data.
async function initializeGroceries() {
  const groceryList = [
    {
      name: "Apple",
      brand: "Wonder",
      price: 2.97,
      rating: 4.4,
    },
    {
      name: "Broccoli",
      brand: "Wonder",
      price: 2.97,
      rating: 4.4,
    },
    {
      name: "Banana",
      brand: "Wonder",
      price: 2.97,
      rating: 4.4,
    },
    {
      name: "Potato",
      brand: "Wonder",
      price: 2.97,
      rating: 4.4,
    },
  ];
  await Grocery.insertMany(groceryList);
}

async function getFruitsAndVegetables() {
  const fruitsAndVegetablesList = [
    {
      name: "Apple",
      price: 1.29,
      rating: 4,
    },
    {
      name: "Banana",
      price: 0.69,
      rating: 4.3,
    },
    {
      name: "Carrot",
      price: 0.99,
      rating: 4.5,
    },
    {
      name: "Broccoli",
      price: 1.49,
      rating: 4.5,
    },
    {
      name: "Strawberry",
      price: 2.99,
      rating: 4.5,
    },
    {
      name: "Spinach",
      price: 1.99,
      rating: 4.5,
    },
    {
      name: "Grapes",
      price: 2.49,
      rating: 4.9,
    },
    {
      name: "Tomato",
      price: 1.79,
      rating: 4.1,
    },
    {
      name: "Potato",
      price: 0.89,
      rating: 4.2,
    },
    {
      name: "Orange",
      price: 1.19,
      rating: 4.4,
    },
  ];

  return fruitsAndVegetablesList;
}

async function addGrocery(name, brand, price, rating) {
  await connect();

  const newGrocery = new Grocery({
    name: name,
    brand: brand,
    price: price,
    rating: rating,
  });

  await newGrocery.save(); // Save the new grocery product to the database
}

module.exports = {
  getGroceries,
  initializeGroceries,
  addGrocery,
  getFruitsAndVegetables,
};

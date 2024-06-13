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
      name: "Bread",
      brand: "Wonder",
      price: 2.97,
      rating: 4.4,
    },
    {
      title: "Krish 3",
      year: 2013,
      rating: "R",
    },
    {
      title: "Sultan",
      year: 2016,
      rating: "G",
    },
    {
      title: "Iron Man 1",
      year: 2008,
      rating: "R",
    },
  ];
  await Grocery.insertMany(groceryList);
}
//Function to add a movie to the movies collection
async function addGrocery(groceryName, groceryBrand, groceryPrice, groceryRating) {
  let newGrocery = new Grocery({
    name: groceryName,
    brand: groceryBrand,
    price: groceryPrice,
    rating: groceryRating,
  });
  newGrocery.save(); //this is the line which actually saves newMovie to the DB
}

module.exports = {
  getGroceries,
  initializeGroceries,
  addGrocery,
};
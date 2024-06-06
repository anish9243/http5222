const mongoose = require("mongoose"); //import Mongoose

//const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?authSource=testdb`;
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

//set up Schema and model
const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rating: String,
});
const Movie = mongoose.model("Movie", MovieSchema);

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}

//Get all movies from the movies collection
async function getMovies() {
  await connect();
  return await Movie.find({}).sort({ age: 1 }); //return array for find all
}
//Initialize movies collection with some data.
async function initializeMovies() {
  const movieList = [
    {
      title: "Dhol",
      year: 2007,
      rating: "G",
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
  await Movie.insertMany(movieList);
}
//Function to add a movie to the movies collection
async function addMovie(movieTitle, movieYear, movieRating) {
  let newMovie = new Movie({
    title: movieTitle,
    year: movieYear,
    rating: movieRating,
  });
  newMovie.save(); //this is the line which actually saves newMovie to the DB
}
//Function to update movie title
async function updateMovieRating(title, newRating) {
  await Movie.updateOne({ title: title }, { rating: newRating });
}

//Function to delete movies by rating
async function deleteMoviesByRating(rating) {
  await Movie.deleteMany({ rating: rating });
}

module.exports = {
  getMovies,
  initializeMovies,
  addMovie,
  updateMovieRating,
  deleteMoviesByRating,
};
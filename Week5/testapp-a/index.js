const express = require("express");
const path = require("path"); //needed when setting up static/file paths
const dotenv = require("dotenv");

//Load the environment variables from .env
dotenv.config();

const db = require("./modules/movies/db"); //load db.js

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
  let movieList = await db.getMovies();
  //if there's nothing in the movies collection, initialize with some content then get the movies again
  if (!movieList.length) {
    await db.initializeMovies(); //load data into movies
    movieList = await db.getMovies();
  }
  console.log(movieList);
  response.render("index", { movies: movieList });
});
app.get("/add", async (request, response) => {
  //add a new movie
  await db.addMovie("2012", 2012 , "G");
  response.redirect("/");
});
app.get("/update", async (request, response) => {
  //update a movie name
  await db.updateMovieRating("Dhol", "R");
  response.redirect("/");
})
app.get("/delete", async (request, response) => {
  //delete movies by rating
  await db.deleteMoviesByRating("R");
  response.redirect("/");
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
const express = require("express");
const path = require("path"); //needed for functions having to do with file paths

const app = express();
const port = process.env.PORT || "8888";

//Settings for Express app
app.set("views", path.join(__dirname, "views")); //setting for "views" is set to path: __dirname/views
app.set("view engine", "pug");

//Set up folder for static files (e.g. CSS, client-side JS, images)
app.use(express.static(path.join(__dirname, "public")));

//SET UP PAGE ROUTES
app.get("/", (request, response) => {
  //response.status(200).send("Test");
  response.render("index", { title: 'ShopEasy - Your One-Stop Online Store',
    featuredProducts: [
        { name: 'Wireless Headphones', price: 59.99, img: 'headphones.jpg' },
        { name: 'Smartwatch', price: 199.99, img: 'smartwatch.jpg' },
        { name: 'Electric Scooter', price: 299.99, img: 'scooter.jpg' }
      ],
    });
});
app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
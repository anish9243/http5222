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
  response.render("index", {
    title: "ShopEasy - Your One-Stop Online Store",
    featuredProducts: [
      { name: "Wireless Headphones", price: 59.99, img: "headphones.jpg" }, // img source : https://www.google.com/search?sca_esv=7883d87e6ed5718d&sca_upv=1&sxsrf=ADLYWIJyeeSDTPZJZPhmjoaw7s2FC1gnXg:1715889691268&q=wireless+headphones+image&uds=ADvngMibaGgWV5GRFruVcj_QTyIi4cOcKLLknKlqQnWhH1pOH6LtB49CQQ6BWvecRNAEeqCeV0-RLa_5xGppGZzQlvR4F9GEqIM5PPkL6Q-GBfaIBzzQKQspzPeG0WlnogKDqfVl0cnuxf40M35eg7l8yQi-JbbJAdc1pmh8eFLxjYivnhHM67ujkC8w1HaY3PNwrxMb187VbULmf-cwlOH9tFcOj2v5DS2Rv8IxH7ynw5fJuA8L33DagsO-PpvXi1Q_-Ed5JyqcG-ffKHiXPUnQU-RwapDsNcpORPUXa01Fy6UA65bXj63dbp19e4i5JAe8tMwLH722&udm=2&prmd=isvnmbtz&sa=X&ved=2ahUKEwiu_5Wc-5KGAxWxhYkEHZgUDy0QtKgLegQIERAB&biw=1440&bih=743&dpr=2#vhid=znoboK0mLMJVPM&vssid=mosaic
      { name: "Smartwatch", price: 199.99, img: "smartwatch.jpg" }, // img source : https://www.google.com/search?q=smart+watch&sca_esv=7883d87e6ed5718d&sca_upv=1&biw=1440&bih=743&udm=2&prmd=sivnmbtz&sxsrf=ADLYWIITXeagbkmsMWjuBt3cUY5LV2LNpg:1715890815093&source=lnms&ved=1t:200715&ictx=111#vhid=39dG3e9rSV0-PM&vssid=mosaic
      { name: "Electric Scooter", price: 299.99, img: "scooter.jpg" }, // img source : https://www.google.com/search?sca_esv=7883d87e6ed5718d&sca_upv=1&sxsrf=ADLYWILlQcTYYRVHlnmdVj6MDzlOYwKXig:1715890857747&q=Electric+Scooter&uds=ADvngMg3r4pcmVlEcNFCYDOKf2gk34MzV2U0brvcch4rOffAN_YotbIeRDiPMlTdYGJTr6qREFSXeE53UqBjMlJ_L7bzj6tFgTlFXM6alP8FqnEIdRwFddEonlG_86Sb1qYhHV4ZFQR_pPGqgr7yneYbvgK6QrdAosZWHyOZiWzyiHA-arhDfkKvNqHlpn8-DvK-OW_R2-BclOTDLLL5pScQmtpEWfVmcTI2XdwRtMxsR1SO9TPUwnQ1aU1JHBAV7K7gnxnZbKQxM_-ml2hhH16ONpP3rcI-F9HQub-dgt-IaIoRUDg1kxj-CgYeG09uKgQVJWAQK_Aq&udm=2&prmd=sivnmbtz&sa=X&ved=2ahUKEwj2nbLI_5KGAxXZpokEHecPBa4QtKgLegQIDBAB&biw=1440&bih=743&dpr=2#vhid=QxfY1-RSq47VHM&vssid=mosaic
    ],
  });
});
app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

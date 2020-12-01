//Dependencies
const express = require("express");

// Creates App
const app = express();

// Sets PORT
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// Router
require("/Users/tatum/Note Taker/routes/apiroutes")(app);
require("/Users/tatum/Note Taker/routes/htmlroutes")(app);


// Listener
// This code "starts" our server.
app.listen(PORT, () => console.log(`app listening on PORT: ${PORT}`));
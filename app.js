//load the app server using express

const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(morgan("combined"));

//localhost:3000
app.listen(3000, () => {
  console.log("Server is running");
});

//home page
app.get("/", (req, res) => {
  console.log("Responding to root route");
  res.send("Hello from root");
});

const router = require("./routes/user");

app.use(router);

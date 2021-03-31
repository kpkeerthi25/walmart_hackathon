const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/router");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.listen(port, function () {
    console.log("Server running in", port);
});
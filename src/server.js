const express = require("express");
const routes = require("./routes");

require("./database/index");

const app = express();
app.use(express.json());

app.use(routes);

app.listen(4011, () => console.log("Server is running"));

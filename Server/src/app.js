const express = require('express');
const dotenv = require('dotenv').config({ path: "./.env" });
const colors = require('colors');
//--------------------
const app = express();
const port = 8000 | process.env.PORT;
//--------------------
app.use("/api", require("../Server_Routers/router"));
//--------------------
app.listen(port, () => console.log(`Listning to The Port ${port}`.bgGreen.white.white));
const express = require('express');
const app = express();
const route = require('./config/router');

require("./config/mongoose")
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(route);
app.use(express.static('public'))
const port = 2000;
app.listen(port, () => console.log(`Listening at port ${port}`));
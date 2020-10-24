var express = require("express");
var app = express();
const port = 3001;

app.get('/test', (request, response) => {
    response.send("Hi this is node api talking!");
});

app.listen(port, () => console.log("Listening on port "+ port + "..."));


var host = "127.0.0.1";
var port = 1337;
var express = require("express");
var stringHelper = require("./stringHelper.js");
var nodeSum = require("./nodeSum.js");
var app = express();

app.get("/", function(request, response) {
   response.send("Hello World!");
});

app.get("/hello/:thetext", function(request, response) {
   response.send("Hello "+stringHelper.upperCase(request.params.thetext)+"!");
});

app.get("/sum/:num1/:num2", function(request, response) {
   response.send("Sum " +request.params.num1 +"+" +request.params.num2 +"=" +nodeSum.sumNodes(request.params.num1, request.params.num2));
});

app.listen(port, host);
console.log('Express listening on host='+host+":"+port);

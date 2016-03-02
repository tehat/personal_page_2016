/**
 * Created by Thomas on 2/28/16.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));



app.set("port", (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, "./public")));

app.get("/*", function(req, res){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});

module.exports = app;





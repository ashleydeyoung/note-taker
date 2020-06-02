var express = require("express");
var path = require("path")

var app = express();
var PORT = 8080;

app.use(express.static("public"));

app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

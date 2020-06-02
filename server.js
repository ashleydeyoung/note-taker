var express = require("express");
var path = require("path")

var app = express();
var PORT = 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./db/db.json"));
  });

// app.post("/notes", function(req, res) {
//     var newnote = req.input
//     var newtext = req.textarea
//     console.log(newnote)
//     console.log(newtext)

//     res.json(path.join(__dirname, "./db/db.json"));
//   });
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

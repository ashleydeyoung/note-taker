var express = require("express");

var app = express();
var PORT = 8080;

app.use(express.static("public", ["index", "notes.html"]));

app.get("/api/notes", function (req, res) {
    res.send("index");
});

// app.get('/notes', function (req, res) {
//     res.send('notes.html')
//   })
// app.use(express.static("public"));
// app.get("/notes", function (req, res) {
//   res.send("notes.html");
// });

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

var express = require("express");
var path = require("path")
var fs = require("fs")
var obj = require("./db/db.json")


var app = express();
var PORT = 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// require("./public/assets/js/index.js")(app);


//notes array


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

app.get("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "db", "db.json"), function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data))
    });
  });

app.post("/api/notes", function(req, res) {
  //stores note information into variable
  let newNote = req.body;
  console.log(newNote)

  obj.push(newNote)
  
  fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(obj), function (err) {
    console.log(err);
  });
    

  //write fs.writeFile
  // fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(note), (err) => {
  //   if (err)
  //   throw err;
  //   console.log("This note was added")
  // })

    // res.json(path.join(__dirname, "./db/db.json", newNote));
  });
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

const express = require("express");
const path = require("path")
const fs = require("fs")
let obj = require("./db/db.json")


var app = express();
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// require("./public/assets/js/index.js")(app);


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
  req.body.id = Math.floor(Math.random() * 100)
  console.log(newNote)
  
  obj.push(newNote)

  fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(obj), function (err) {
    if (err) {
      throw err
    }
    console.log("Saved note!");
    res.json(obj);
  });
    
  });
//-Should receive a query parameter containing the id of a note to delete. 
// This means you'll need to find a way to give each note a unique `id` when it's saved. 
// In order to delete a note, you'll need to read all notes from the `db.json` file, 
// remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

app.delete("/api/notes/:id", function(req, res) {
  // fs.readFile(path.join(__dirname, "db", "db.json"), function(err, data) {
      // console.log(req.params.id)
        let newId = req.params.id
        obj = obj.filter(note => {
          return note.id != newId
        })
  
  
    fs.writeFile(path.join(__dirname, "db", "db.json"), JSON.stringify(obj), (err) => {
        if (err) throw err;
        res.json(obj)
      });
// })
});
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

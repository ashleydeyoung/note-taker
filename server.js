//DEPENDENCIES
const express = require("express");
const path = require("path")
const fs = require("fs")
//defines db (an array of objects)
let arr = require("./db/db.json")

//tells app creating an app server
var app = express();
//sets a port
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static public
app.use(express.static("public"));

//ROUTES

//Home page html route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

//notes html route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// API route shown JSON
app.get("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "db", "db.json"), function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data))
    });
  });

//API POST request code that handles when a user submits form
app.post("/api/notes", function(req, res) {
  //stores note information into variable
  let newNote = req.body;
  req.body.id = Math.floor(Math.random() * 100)
  
  arr.push(newNote)

  fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(arr), function (err) {
    if (err) {
      throw err
    }
    console.log("Saved note!");
    res.json(arr);
  });
    
  });

//route to delete file
app.delete("/api/notes/:id", function(req, res) {
        //finds id
        let newId = req.params.id
        //filters array to remove id 
        arr = arr.filter(note => {
          return note.id != newId
        })
  
      //writes new updated array to db file
    fs.writeFile(path.join(__dirname, "db", "db.json"), JSON.stringify(arr), (err) => {
        if (err) throw err;
        res.json(arr)
      });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

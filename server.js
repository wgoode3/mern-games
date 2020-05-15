const express = require("express");
const port = 8000;
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

// We will be using a database instead soon!
const games = [
    {title: "Tekken", genre: "Fighting", _console: "Multi", studio: "Namco"},
    {title: "Cyberpunk 2077", genre: "Action", _console: "Multi", studio: "CD Projekt Red"}
];

// Gets All Games
app.get("/games", (req, res) => {
    res.json( games );
});

// Create
app.post("/games", (req, res) => {
    console.log("in the back-end", req.body);
    games.push(req.body);
    res.json( {"status": "ok"} );
});

// Get One Game
app.get("/games/:id", (req, res) => {
    res.json( games[req.params.id] );
});

// Update One Game
app.put("/games/:id", (req, res) => {
    games[req.params.id] = req.body;
    res.json( {"status": "ok"} );
});

// Delete One Game
app.delete("/games/:id", (req, res) => {
    games.splice([req.params.id], 1);
    res.json( {"status": "ok"} );
});

// We want to have this line run last!
app.listen(port, () => console.log(`Listening on port ${port}`));
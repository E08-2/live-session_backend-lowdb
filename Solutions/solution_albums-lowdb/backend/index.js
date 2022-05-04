import express from "express";
import cors from "cors";

// * New (1/6) - import lowdb
import { Low, JSONFile } from "lowdb";

const app = express();

// * New (2/6) - create "db" object
const adapter = new JSONFile("./data/db.json");
const db = new Low(adapter);

// * New (3/6) - update "db.data" with the current contents of the "data/db.json" file
await db.read();

// This allows ALL cors requests to all our routes
app.use(cors());

// We can use express's .json() method to parse JSON data received in any request
app.use(express.json());

// Create a "/" route serving GET requests
// This will send a response containing a simple string 
app.get("/", (req, res) => {
    res.send("Welcome to my albums page!");
})

// Create an "/albums" route serving GET requests
// This will send a response containing the current array of album objects, in JSON format 
app.get("/albums", (req, res) => {
    res.json(albums);
})

// Create a "/new-album" route serving POST requests
// This should receive data in the format { "band": "x", "albumTitle": "y", "albumYear": "z" }
app.post("/new-album", (req, res) => {
    const { band, albumTitle, albumYear } = req.body;

    const newAlbum = {
        // * New (4/6): change the logic to assign an id to use "db.data.albums"
        id: db.data.albums.length + 1,
        band: band,
        albumTitle: albumTitle,
        albumYear: albumYear
    }

    // * New (5/6): push the new album received from the frontend into "db.data.albums"
    db.data.albums.push(newAlbum);

    // * New (6/6): write your changes to the "data/db.json" file, then send a response back to the frontend
    db.write()
    .then(() => {
        console.log(`New album added to the albums array with id ${newAlbum.id}`);
        res.status(201).json(db.data.albums);
    })
})

app.listen(3001, () => {
    console.log("Server has started on port 3001!");
})
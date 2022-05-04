import express from "express";
import cors from "cors";

const app = express();

// This allows ALL cors requests to all our routes
app.use(cors());

// We can use express's .json() method to parse JSON data received in any request
app.use(express.json());

// Array to store "album" objects
// This will be re-initialized whenever the app restarts, losing all previous data
// So soon we will use a database instead, to "persist" (save) data over time!
let albums = [];

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
        id: albums.length + 1,
        band: band,
        albumTitle: albumTitle,
        albumYear: albumYear
    }

    albums.push(newAlbum);

    console.log(`New album added to the albums array with id ${newAlbum.id}`);

    res.status(201).json(albums);
})

app.listen(3001, () => {
    console.log("Server has started on port 3001!");
})
  
// Dependencies
const path = require("path");

module.exports = (app) => {
// GET /notes - Returns the notes.html file.
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
// GET * - Returns the index.html file.
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}
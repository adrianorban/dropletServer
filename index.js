const express = require("express");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    console.log("asdads");
    return res.status(200).json({
        msg: "working on ocean"
    })
})

app.get("/login", (req, res) => {
    console.log("asdads");
    return res.status(200).json({
        msg: "working LOGIN on ocean"
    })
})

app.listen(PORT, () => {
    console.log(`working on port ${PORT}`);
})
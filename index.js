const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 3001

const app = express();

app.listen(port, (req, res) =>{
    res.send("server is ")
})
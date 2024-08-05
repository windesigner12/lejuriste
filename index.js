const express = require('express')
//const cors = require("cors")
//app.use(cors())
const app = express()
const port = process.env.PORT || 8000
require('dotenv').config();
const {readdirSync} = require("fs")

readdirSync("./routes").map((file)=>app.use("/",require("./routes/"+file)))

const products = require("./routes/maximes.js")

const cart = require("./routes/citations.js")


app.get('/', (req, res) => {
  res.send('Main page!')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

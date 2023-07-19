// start web server
// import library express to initialize server
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
app.get('/',(req, res) => res.send('Hello everyone')) // get: sucess => status: 200 

app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`))
// routes

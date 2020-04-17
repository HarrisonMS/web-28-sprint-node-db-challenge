const express = require('express');

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send(`server up and running go get it quick`)
})  


module.exports = server;

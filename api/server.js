const express = require('express');
const helmet = require('helmet')

const server = express()

server.use(helmet());
server.use(express.json())

server.get('/', (req, res) => {
  res.send(`server up and running go get it quick`)
})  


module.exports = server;

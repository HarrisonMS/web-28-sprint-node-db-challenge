const express = require('express');
const helmet = require('helmet')

const ProjectRouter = require('../projects/projects-router');
const ResourceRouter = require('../resources/resources-router')
const TasksRouter = require('../tasks/tasks-router')
const server = express()

server.use(helmet());
server.use(express.json())
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TasksRouter);
server.get('/', (req, res) => {
  res.send(`server up and running go get it quick`)
})  


module.exports = server;

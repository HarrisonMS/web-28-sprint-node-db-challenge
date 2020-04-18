const express = require('express');
const Tasks = require('./tasks-model');
const router = express.Router();

router.get('/', (req, res) => {
  Tasks
    .find()
    .then(tasks => {
      const tasksB = tasks.map(task => ({...task, completed: Boolean(task.completed)}));
      res.status(200).json(tasksB);
    })
    .catch(() => {
      res.status(500).json({ error: 'unable to get all tasks from the database' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Tasks
    .findById(id)
    .then(task => {
      if (task) {
        const tasksB = {...task, completed: Boolean(task.completed)};
        res.status(200).json(tasksB);
      } else {
        res.status(404).json({ message: 'task not found in our database' });
      }
    })
    .catch(() => {
      res.status(500) .json({ error: 'unable to get tasks' });
    });
});

router.post('/', (req, res) => {
  const taskData = req.body;
  Tasks
    .add(taskData)
    .then(task => {
      const tasksB = {...task, completed: Boolean(task.completed)};
      res.status(201).json(taskB);
    })
    .catch(() => {
      res
        .status(500).json({ error: 'unable to add new task to add a task to our data base' });
    });
});

module.exports = router;
const express = require('express');
const Resources = require('./resources-model');
const router = express.Router();

router.get('/', (req, res) => {
  Resources
    .find()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(() => {
      res.status(500).json({ error: 'unable to fetch all resources' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Resources
    .findById(id)
    .then(resource => {
      if (resource) {
        res.status(200).json(resource);
      } else {
          res.status(404).json({ message: 'resource not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'unable to get resource' });
    });
});

router.post('/', (req, res) => {
  const resourceData = req.body;
  Resources
    .add(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(() => {
      res.status(500).json({ error: 'unable to add new resource' });
    });
});

module.exports = router;
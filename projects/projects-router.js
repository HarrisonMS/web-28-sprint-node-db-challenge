const express = require("express");
const router = express.Router();

const Projects = require("./projects-model.js")


router.get("/", (req, res) => {
  Projects.getProjects().then((projects) => {
    projects.map((project) => {
      if (project.completed === 0) {
        project.completed = false;
      }  
        project.completed = true;
    });
    res.status(200).json({Projects: projects}); 
  })
  .catch((err) => {
      console.log(err);
      res.status(500).json({ errrorMessage: "Failed to get projects from data base" }); 
  });
});

router.get('/:id/resources', (req, res) => {
  const { id } = req.params;

  Projects.getResources(id)
  .then(resources => {
    if (resources.length) {
      res.json({resources: resources});
    } 
      res.status(404).json({ message: 'Could not find resources for given recipe id' })
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({ message: 'Failed to get resources for given recipe id' });
  });
});

module.exports = router;
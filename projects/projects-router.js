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


router.get("/:id", (req, res) => {
  const { id } = req.params;

 Projects.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: "Could not find project with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get project" });
    });
});

router.get('/:id/resources', (req, res) => {
  const { id } = req.params;

  Projects.getResources(id)
  .then(resources => {
    if (resources.length) {
    return res.json({resources: resources});
    } 
    return res.status(404).json({ message: 'Could not find resources for given project id' }) 
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({ message: 'Failed to get resources for given project id' });
  });
});

router.post('/', (req, res) => {
  const projectData = req.body

  Projects.addProject(projectData)
  .then(project => {
    if (!project.name) {
      res.status(400).json({errrorMessage: 'Name for the project is required.. you may choose not to describe the project if you want'})
    } else {
      res.status(201).json({data: project})
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({ message: error });
  });
})

module.exports = router;
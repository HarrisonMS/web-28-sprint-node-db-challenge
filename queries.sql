
-- seed checks
SELECT * 
FROM projects 

SELECT * 
FROM tasks

SELECT p.name, t.id, t.description, t.notes, t.completed,  p.completed
FROM tasks AS t
JOIN projects as p on t.project_id = p.id
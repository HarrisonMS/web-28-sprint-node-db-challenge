
-- seed checks
SELECT * 
FROM projects 

SELECT * 
FROM tasks

SELECT * 
FROM resources

SELECT p.name, r.name, r.description, t.id, t.description, t.notes, t.completed,  p.completed
FROM tasks AS t
JOIN projects as p on t.project_id = p.id
JOIN resources AS r on project_resources.resource_id = p.id

SELECT 
    p.name AS 'Project Name',
    r.name AS 'Resource Name', 
    r.description AS 'Resource Description'
FROM projects AS p
JOIN resources AS r ON pr.resource_id = r.id
JOIN project_resources AS pr ON pr.project_id = p.id
WHERE p.id = 1
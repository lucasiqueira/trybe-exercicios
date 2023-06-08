SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome Colaborador",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    hr.employees AS Employee
INNER JOIN
    hr.employees AS Manager ON Employee.manager_id = Manager.employee_id;

-- Queremos saber o Nome dos colaboradores e seus respectivos gerentes (manager) cujos departamentos (department) são diferentes.
SELECT * FROM hr.employees;

SELECT e.first_name, e.last_name, CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM hr.employees e
INNER JOIN hr.employees m
ON e.manager_id = m.employee_id
WHERE e.department_id <> m.department_id;

-- Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.
SELECT m.first_name, m.last_name, COUNT(e.employee_id) AS direct_subordinates
FROM hr.employees m
INNER JOIN hr.employees e
ON m.employee_id = e.manager_id
GROUP BY first_name, last_name
ORDER BY direct_subordinates DESC;
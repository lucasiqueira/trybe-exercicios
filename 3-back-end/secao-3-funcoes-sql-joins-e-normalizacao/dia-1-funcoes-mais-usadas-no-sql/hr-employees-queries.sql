-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary) AS biggest_salary FROM employees;

-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) - MIN(salary) AS diff_salary FROM employees;

-- 3. 🚀 Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.
SELECT 
    job_id, ROUND(AVG(salary), 2) AS salary_average
FROM
    employees
GROUP BY job_id
ORDER BY salary_average DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) AS employees_total_salary FROM employees;

-- 5. 🚀 Escreva uma query que exiba quatro informações: 
-- o maior salário, o menor salário, a soma de todos os salários e a média dos salários. 
-- Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
    ROUND(MAX(salary), 2) AS highest_salary,
    ROUND(MIN(salary), 2) AS lowest_salary,
    ROUND(SUM(salary), 2) AS sum_total_salaries,
    ROUND(AVG(salary), 2) AS average_salary
FROM
    employees;
    
-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).
SELECT COUNT(*) FROM employees
WHERE job_id = 'IT_PROG';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).
SELECT 
    job_id, SUM(salary) AS total_salary_per_job
FROM
    employees
GROUP BY job_id
ORDER BY total_salary_per_job DESC;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro 
-- necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).
SELECT 
    job_id, SUM(salary) AS total_salary_per_job
FROM
    employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).
SELECT 
    job_id, ROUND(AVG(salary), 2) AS average_salary_per_job
FROM
    employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY average_salary_per_job DESC;

-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. 
-- Dica: agrupe pelo department_id.
SELECT 
    department_id,
    AVG(salary) AS average_salary_per_department,
    COUNT(*) employees_per_department
FROM
    employees
GROUP BY department_id
HAVING employees_per_department > 10;

-- 11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
SELECT * FROM employees
WHERE phone_number LIKE '777%';

SELECT CONCAT('777', SUBSTRING(phone_number, 4)) FROM employees
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET phone_number = CONCAT('777', SUBSTRING(phone_number, 4))
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM employees;

SELECT * FROM employees
WHERE LENGTH(first_name) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT 
    employee_id, first_name, YEAR(hire_date) AS hire_year
FROM
    employees;

-- 14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: 
-- id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT 
    employee_id, first_name, DAY(hire_date) AS hire_month_day
FROM
    employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT 
    employee_id, first_name, MONTH(hire_date) AS hire_month
FROM
    employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(CONCAT(first_name, ' ', last_name)) AS full_name FROM employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT last_name, hire_date FROM employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
SELECT 
    first_name,
    last_name,
    DATEDIFF(CURRENT_DATE(), hire_date) AS working_for_days
FROM
    employees;
-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT a.actor_id, a.first_name, a.last_name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;

-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, 
-- juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id;

-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm “rene” em seus nomes.
-- As informações podem ser encontradas nas tabelas address e customer.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%'; 

-- Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado. Ordene seus resultados por nome e sobrenome de forma decrescente.
-- Exiba somente os clientes ativos. As informações podem ser encontradas nas tabelas customer e rental.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.rental;

SELECT 
    c.first_name, c.last_name, COUNT(r.rental_id) AS quantity
FROM
    sakila.customer AS c
        INNER JOIN
    sakila.rental AS r ON c.customer_id = r.customer_id
WHERE c.active
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;

-- Monte uma query que exiba o nome, sobrenome e a media de pagamento (amount) paga aos funcionários no ano de 2006.
-- Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT 
    s.first_name, s.last_name, AVG(p.amount) AS average_payment
FROM
    sakila.staff AS s
        INNER JOIN
    sakila.payment AS p ON p.staff_id = s.staff_id
WHERE
    YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;

-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme,
-- usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

SELECT 
    a.actor_id, a.first_name, fa.film_id, f.title
FROM
    sakila.actor AS a
        INNER JOIN
    sakila.film_actor AS fa ON a.actor_id = fa.actor_id
        INNER JOIN
    sakila.film AS f ON fa.film_id = f.film_id;

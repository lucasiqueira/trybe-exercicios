SELECT first_name, COUNT(*) AS quantity FROM sakila.actor
GROUP BY first_name;

-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT active, COUNT(*) AS quatity 
FROM sakila.customer
GROUP BY active;

-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja.
-- Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active
ORDER BY store_id, active;

-- Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film.
-- Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT * FROM sakila.film;
SELECT rating, AVG(rental_duration) AS average FROM sakila.film
GROUP BY rating
ORDER BY average DESC;

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele.
-- Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT * FROM sakila.address;
SELECT district, COUNT(*) AS quantity FROM sakila.address
GROUP BY district
ORDER BY quantity DESC;

SELECT rating, AVG(length) AS average
FROM sakila.film
GROUP BY rating
HAVING average BETWEEN 115.0 AND 121.5;

SELECT rating, SUM(replacement_cost) AS replacement_cost_sum
FROM sakila.film
GROUP by rating
HAVING replacement_cost_sum > 3950.50;
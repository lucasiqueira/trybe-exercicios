-- Usando a coluna replacement_cost (valor de substituição), vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

SELECT * FROM sakila.film;

SELECT AVG(replacement_cost) FROM sakila.film;
SELECT MIN(`length`) AS 'Duracao Minima' FROM sakila.film;
SELECT MAX(`length`) AS 'Duracao Maxima' FROM sakila.film;
SELECT SUM(`length`) AS 'Tempo de Exibicao Total' FROM sakila.film;
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;
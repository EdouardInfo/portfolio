-- ============================================
-- Projet base de données : Univers Star Wars
-- Groupe : G04
-- Membres : Corentin Houllier, Edouard Lecocq, Tristan Leriche-Leroy
-- SGBD : MySQL
-- ============================================

-- ============================================
-- Requête 1 : Liste détaillée des films triée selon la chronologie et l’année de sortie
-- ============================================
SELECT * FROM G04_Films
ORDER BY chronologie, film_annee;

-- ============================================
-- Requête 2 : Liste des personnages dont le nom contient "wa" ou un chiffre
-- ============================================
SELECT * FROM G04_Personnages
WHERE pers_nom REGEXP 'wa|[0-9]';

-- ============================================
-- Requête 3 : Liste des séries et des films sorties entre 2010 et 2020
-- ============================================
SELECT * FROM G04_Films
WHERE film_annee BETWEEN 2010 AND 2020;

SELECT * FROM G04_Series
WHERE serie_annee BETWEEN 2010 AND 2020;

-- ============================================
-- Requête 4 :  Nombre de personnages
-- ============================================
SELECT COUNT(*)
FROM G04_Personnages;

-- ============================================
-- Requête 5 : Liste des personnages et leurs films sortis entre 1980 et 1995
-- ============================================
SELECT G04_Personnages.pers_nom, G04_Films.film_titre, G04_Films.film_annee, 
       G04_Joue_film.importance, G04_Joue_film.acteur
FROM G04_Personnages
JOIN G04_Joue_film ON G04_Personnages.pers_id = G04_Joue_film.pers_id
JOIN G04_Films ON G04_Joue_film.film_id = G04_Films.film_id
WHERE G04_Films.film_annee BETWEEN 1980 AND 1995;

-- ============================================
-- Requête 6 : Liste des personnage de la série de votre choix
-- ============================================

-- Série choisie : "The Mandalorian"

SELECT G04_Personnages.pers_nom, G04_Personnages.pers_espece, G04_Personnages.pers_camp, 
       G04_Joue_serie.importance, G04_Joue_serie.acteur
FROM G04_Personnages
JOIN G04_Joue_serie ON G04_Personnages.pers_id = G04_Joue_serie.pers_id
JOIN G04_Series ON G04_Joue_serie.serie_id = G04_Series.serie_id
WHERE G04_Series.serie_nom = 'The Mandalorian';

-- ============================================
-- Requête 7 : Titres des films et séries dans lesquels R2-D2 apparait
-- ============================================
SELECT G04_Films.film_titre
FROM G04_Films
JOIN G04_Joue_film ON G04_Films.film_id = G04_Joue_film.film_id
JOIN G04_Personnages ON G04_Joue_film.pers_id = G04_Personnages.pers_id
WHERE G04_Personnages.pers_nom = 'R2-D2';

SELECT G04_Series.serie_nom
FROM G04_Series
JOIN G04_Joue_serie ON G04_Series.serie_id = G04_Joue_serie.serie_id
JOIN G04_Personnages ON G04_Joue_serie.pers_id = G04_Personnages.pers_id
WHERE G04_Personnages.pers_nom = 'R2-D2';

-- ============================================
-- Requête 8 : Liste des personnages ayant participé à "L’empire contre-attaque"
-- ============================================
SELECT G04_Personnages.pers_nom, G04_Personnages.pers_espece, G04_Personnages.pers_camp,
       G04_Joue_film.importance, G04_Joue_film.acteur
FROM G04_Personnages
JOIN G04_Joue_film ON G04_Personnages.pers_id = G04_Joue_film.pers_id
JOIN G04_Films ON G04_Joue_film.film_id = G04_Films.film_id
WHERE G04_Films.film_titre = 'L''empire contre-attaque';


-- ============================================
-- Requête 9 : Nombre de films par personnage
-- ============================================
SELECT G04_Personnages.pers_nom, COUNT(G04_Joue_film.film_id)
FROM G04_Personnages
JOIN G04_Joue_film ON G04_Joue_film.pers_id = G04_Personnages.pers_id
GROUP BY G04_Personnages.pers_id, G04_Personnages.pers_nom;

-- ============================================
-- Requête 10 : Personnages présents dans 3 films ou plus
-- ============================================
SELECT G04_Personnages.pers_nom, G04_Personnages.pers_espece, G04_Personnages.pers_camp,
       COUNT(G04_Joue_film.film_id)
FROM G04_Personnages
JOIN G04_Joue_film ON G04_Joue_film.pers_id = G04_Personnages.pers_id
GROUP BY G04_Personnages.pers_id, G04_Personnages.pers_nom, G04_Personnages.pers_espece, G04_Personnages.pers_camp
HAVING COUNT(G04_Joue_film.film_id) >= 3;

-- ============================================
-- Fin du fichier
-- ============================================
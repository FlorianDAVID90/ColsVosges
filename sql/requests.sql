-- Nombre de versans pour chaque col
SELECT C.id_col, nom_col, COUNT(V.id_versan) AS nbrVersans
FROM COL C
         LEFT JOIN VERSAN V on C.id_col = V.id_col
GROUP BY C.id_col, nom_col;

-- Profil pour chaque versan de col
SELECT id_versan, nom_col, ('Depuis ' || nom_ville || ' (' || id_departement || ') : ' || nb_km || 'km à ' || pourcentage || '%') AS profil
FROM VERSAN Ve
         INNER JOIN COL C on C.id_col = Ve.id_col
         INNER JOIN VILLE V on V.id_ville = Ve.id_ville
GROUP BY id_versan, nom_col;
-- ou
SELECT id_versan, nom_col, 'Depuis ' || nom_ville AS villeVersan, nb_km, pourcentage FROM VERSAN
INNER JOIN VILLE V on V.id_ville = VERSAN.id_ville
INNER JOIN COL C on C.id_col = VERSAN.id_col
INNER JOIN DEPARTEMENT D on D.id_departement = V.id_departement
GROUP BY id_versan, nom_col, nb_km, pourcentage;
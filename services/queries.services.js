const getAllCols = 'SELECT * FROM COL';
const getColsFromDept = 'SELECT id_versan, nom_col, nom_ville, nb_km, pourcentage FROM VERSAN INNER JOIN VILLE V on V.id_ville = VERSAN.id_ville INNER JOIN COL C on C.id_col = VERSAN.id_col INNER JOIN DEPARTEMENT D on D.id_departement = V.id_departement WHERE D.id_departement = $1 GROUP BY id_versan, nom_col, nb_km, pourcentage;'
const getVersan = 'SELECT id_versan, nb_km, pourcentage, img_versan, nom_ville, nom_col FROM VERSAN INNER JOIN VILLE V on V.id_ville = VERSAN.id_ville INNER JOIN COL C on C.id_col = VERSAN.id_col WHERE id_versan = $1;'

module.exports = {
    getAllCols,
    getColsFromDept,
    getVersan
};
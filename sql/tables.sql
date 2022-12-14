DROP TABLE IF EXISTS VERSAN;
DROP TABLE IF EXISTS COL;
DROP TABLE IF EXISTS VILLE;
DROP TABLE IF EXISTS DEPARTEMENT;

CREATE TABLE IF NOT EXISTS DEPARTEMENT(
    id_departement INT NOT NULL,
    nom_departement VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS VILLE(
    id_ville INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nom_ville VARCHAR(255),
    code_postal INT,
    id_departement INT,
    FOREIGN KEY (id_departement) REFERENCES DEPARTEMENT(id_departement)
);

CREATE TABLE IF NOT EXISTS COL(
    id_col INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nom_col VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS VERSAN(
    id_versan INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nb_km DECIMAL(3,1),
    pourcentage DECIMAL(3,1),
    img_versan VARCHAR(255),
    id_ville INT NOT NULL,
    id_col INT NOT NULL,
    FOREIGN KEY (id_ville) REFERENCES VILLE(id_ville),
    FOREIGN KEY (id_col) REFERENCES COL(id_col)
);
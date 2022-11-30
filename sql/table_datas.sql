INSERT INTO DEPARTEMENT(id_departement, nom_departement) VALUES
(54, 'Meurthe-et-Moselle'),
(57, 'Moselle'),
(67, 'Bas-Rhin'),
(68, 'Haut-Rhin'),
(70, 'Haute-Saône'),
(88, 'Vosges'),
(90, 'Territoire de Belfort');

INSERT INTO VILLE(nom_ville, code_postal) VALUES
('Plancher-les-Mines', 70290),
('Gérardmer', 88400),
('La Bresse', 88250),
('Ventron', 88310),
('Bussang', 88540),
('Le Thillot', 88160),
('Remiremont', 88200),
('Cornimont', 88310),
('Saint-Maurice-sur-Moselle', 88560),
('Belfahy', 70290),
('Lepuix', 90200),
('Oderen', 68610),
('Sewen', 68290),
('Haut-du-Them-Château-Lambert', 70440),
('Vagney', 88120),
('Servance-Miellin', 70440),
('Kruth', 68220),
('Le Ménil', 88160),
('Fresse-sur-Moselle', 88160),
('Ramonchamp', 88160),
('Ferdrupt', 88360),
('Saulxures-sur-Moselotte', 88290),
('Plancher-Bas', 70290),
('Fresse', 70270),
('Rupt-sur-Moselle', 88360),
('Uffholtz', 68700),
('Thann', 68800),
('Cernay', 68700),
('Wattwiller', 68700),
('Wuenheim', 68500),
('Soultz-Haut-Rhin', 68500),
('Willer-sur-Thur', 68760),
('Moosch', 68790),
('Saint-Amarin', 68550);
UPDATE VILLE SET id_departement = code_postal/1000;

INSERT INTO COL(nom_col) VALUES
('La Super Planche des Belles Filles'),('Ballon d’Alsace'),('Grand Ballon'),
('Ballon de Servance'),('Col de Grosse Pierre'),('Col de la Croix des Moinats'),
('Col des Croix'),('Col du Hunsdruck'),('Col d’Oderen'),
('Col de Bramont'),('Col de la Vierge'),('Col du Page'),
('Montée de Chauveroche'),('Côte de la Chapelle des Vées'),('Col de Morbieux'),
('Col des Chevrères'),('Côte du Monument du Poteau'),('Col de la Sûre'),
('La Croix du Lait'),('Col du Haag');

INSERT INTO VERSAN(nb_km, pourcentage, img_versan, id_ville, id_col) VALUES
(7,8.7,'super_planche_des_belles_filles.png',1,1),
(8.7,6.9,null,9,2),(11.5,5.3,null,11,2),(11,5.8,null,13,2),
(1.3,9,null,17,3),(13.5,6.7,'grand_ballon2.png',31,3),(20.2,4.9,null,26,3),(19.5,4.9,null,29,3),(15.5,6.1,null,30,3),
(6.2,7.6,null,1,4),(10.2,4.7,null,6,4),(14.5,4.6,null,6,4),(11,5.8,null,14,4),
(3.1,6.4,null,2,5),(3.9,7.7,null,3,5),(5.2,5.9,null,3,5),
(6.2,4,null,3,6),(5.2,7,null,8,6),(7.6,6,null,15,6),
(5.2,4.7,null,16,7),(3.3,6.1,null,6,7),
-- (),(),(),() -- Col du Hunsdruck
(6.7,6.1,null,17,9),(8.3,3.8,null,8,9),
-- (),(), -- Col de Bramont
-- (),(), -- Col de la Vierge
-- (),(),() -- Col du Page
(2.9,10.7,'montee-de-chauveroche.png',11,13),
(2.5,9.5,null,19,14),(2.9,9.3,null,6,14),(2.9,8.1,null,18,14),
(5.1,6.3,null,20,15),(5.3,6.3,null,22,15),(5.4,5.4,null,22,15),
(3.5,9.5,'col-chevreres.png',16,16),(8.4,5.2,null,23,16),(7,5,null,24,16),(5,8.7,null,16,16),
(2.7,9.6,null,20,17),
(3.5,8.3,null,21,18),(3.2,8.8,null,21,18),--(1.6,11,null,21,18)
(3.7,8.8,null,25,19),
(9.3,8.9,null,33,20),(9.5,8.5,null,32,20);

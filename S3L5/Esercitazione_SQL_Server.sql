
-- Creazione del database
CREATE DATABASE PoliziaMunicipale;
USE PoliziaMunicipale;

-- Creazione della tabella ANAGRAFICA
CREATE TABLE ANAGRAFICA (
    idAnagrafica INT PRIMARY KEY IDENTITY,
    Cognome NVARCHAR(50),
    Nome NVARCHAR(50),
    Indirizzo NVARCHAR(100),
    Città NVARCHAR(50),
    CAP NVARCHAR(10),
    Cod_Fisc NVARCHAR(16)
);

-- Creazione della tabella TIPO_VIOLAZIONE
CREATE TABLE TIPO_VIOLAZIONE (
    idViolazione INT PRIMARY KEY IDENTITY,
    descrizione NVARCHAR(255)
);

-- Creazione della tabella VERBALE
CREATE TABLE VERBALE (
    idVerbale INT PRIMARY KEY IDENTITY,
    idAnagrafica INT,
    idViolazione INT,
    DataViolazione DATE,
    IndirizzoViolazione NVARCHAR(100),
    Nominativo_Agente NVARCHAR(50),
    DataTrascrizioneVerbale DATE,
    Importo DECIMAL(10, 2),
    DecurtamentoPunti INT,
    FOREIGN KEY (idAnagrafica) REFERENCES ANAGRAFICA(idAnagrafica),
    FOREIGN KEY (idViolazione) REFERENCES TIPO_VIOLAZIONE(idViolazione)
);

-- Inserimento dati nella tabella ANAGRAFICA
INSERT INTO ANAGRAFICA (Cognome, Nome, Indirizzo, Città, CAP, Cod_Fisc)
VALUES 
('Rossi', 'Mario', 'Via Roma 1', 'Palermo', '90100', 'RSSMRA80A01H501Y'),
('Bianchi', 'Luca', 'Via Milano 2', 'Palermo', '90100', 'BNCLCU85M01F205Z');

-- Inserimento dati nella tabella TIPO_VIOLAZIONE
INSERT INTO TIPO_VIOLAZIONE (descrizione)
VALUES 
('Eccesso di velocità'),
('Parcheggio in divieto di sosta');

-- Inserimento dati nella tabella VERBALE
INSERT INTO VERBALE (idAnagrafica, idViolazione, DataViolazione, IndirizzoViolazione, Nominativo_Agente, DataTrascrizioneVerbale, Importo, DecurtamentoPunti)
VALUES 
(1, 1, '2023-05-10', 'Via Roma 1', 'Agente A', '2023-05-11', 150.00, 2),
(2, 2, '2023-06-15', 'Via Milano 2', 'Agente B', '2023-06-16', 100.00, 1);

-- 1. Conteggio dei verbali trascritti
SELECT COUNT(*) AS ConteggioVerbali
FROM VERBALE;

-- 2. Conteggio dei verbali trascritti raggruppati per anagrafe
SELECT ANAGRAFICA.Cognome, ANAGRAFICA.Nome, COUNT(*) AS ConteggioVerbali
FROM VERBALE
JOIN ANAGRAFICA ON VERBALE.idAnagrafica = ANAGRAFICA.idAnagrafica
GROUP BY ANAGRAFICA.Cognome, ANAGRAFICA.Nome;

-- 3. Conteggio dei verbali trascritti raggruppati per tipo di violazione
SELECT TIPO_VIOLAZIONE.descrizione, COUNT(*) AS ConteggioVerbali
FROM VERBALE
JOIN TIPO_VIOLAZIONE ON VERBALE.idViolazione = TIPO_VIOLAZIONE.idViolazione
GROUP BY TIPO_VIOLAZIONE.descrizione;

-- 4. Totale dei punti decurtati per ogni anagrafe
SELECT ANAGRAFICA.Cognome, ANAGRAFICA.Nome, SUM(VERBALE.DecurtamentoPunti) AS TotalePuntiDecurtati
FROM VERBALE
JOIN ANAGRAFICA ON VERBALE.idAnagrafica = ANAGRAFICA.idAnagrafica
GROUP BY ANAGRAFICA.Cognome, ANAGRAFICA.Nome;

-- 5. Cognome, Nome, Data violazione, Indirizzo violazione, importo e punti decurtati per tutti gli anagrafici residenti a Palermo
SELECT ANAGRAFICA.Cognome, ANAGRAFICA.Nome, VERBALE.DataViolazione, VERBALE.IndirizzoViolazione, VERBALE.Importo, VERBALE.DecurtamentoPunti
FROM VERBALE
JOIN ANAGRAFICA ON VERBALE.idAnagrafica = ANAGRAFICA.idAnagrafica
WHERE ANAGRAFICA.Città = 'Palermo';

-- 6. Cognome, Nome, Indirizzo, Data violazione, importo e punti decurtati per le violazioni fatte tra il febbraio 2009 e luglio 2009
SELECT ANAGRAFICA.Cognome, ANAGRAFICA.Nome, ANAGRAFICA.Indirizzo, VERBALE.DataViolazione, VERBALE.Importo, VERBALE.DecurtamentoPunti
FROM VERBALE
JOIN ANAGRAFICA ON VERBALE.idAnagrafica = ANAGRAFICA.idAnagrafica
WHERE VERBALE.DataViolazione BETWEEN '2009-02-01' AND '2009-07-31';

-- 7. Totale degli importi per ogni anagrafico
SELECT ANAGRAFICA.Cognome, ANAGRAFICA.Nome, SUM(VERBALE.Importo) AS TotaleImporto
FROM VERBALE
JOIN ANAGRAFICA ON VERBALE.idAnagrafica = ANAGRAFICA.idAnagrafica
GROUP BY ANAGRAFICA.Cognome, ANAGRAFICA.Nome;

-- 8. Visualizzazione di tutti gli anagrafici residenti a Palermo
SELECT *
FROM ANAGRAFICA
WHERE Città = 'Palermo';

-- 9. Query che visualizzi Data violazione, Importo e decurtamento punti relativi ad una certa data
SELECT DataViolazione, Importo, DecurtamentoPunti
FROM VERBALE
WHERE DataViolazione = '2023-05-10';

-- 10. Conteggio delle violazioni contestate raggruppate per Nominativo dell’agente di Polizia
SELECT Nominativo_Agente, COUNT(*) AS ConteggioViolazioni
FROM VERBALE
GROUP BY Nominativo_Agente;

-- 11. Cognome, Nome, Indirizzo, Data violazione, Importo e punti decurtati per tutte le violazioni che superino il decurtamento di 5 punti
SELECT ANAGRAFICA.Cognome, ANAGRAFICA.Nome, ANAGRAFICA.Indirizzo, VERBALE.DataViolazione, VERBALE.Importo, VERBALE.DecurtamentoPunti
FROM VERBALE
JOIN ANAGRAFICA ON VERBALE.idAnagrafica = ANAGRAFICA.idAnagrafica
WHERE VERBALE.DecurtamentoPunti > 5;

-- 12. Cognome, Nome, Indirizzo, Data violazione, Importo e punti decurtati per tutte le violazioni che superino l’importo di 400 euro
SELECT ANAGRAFICA.Cognome, ANAGRAFICA.Nome, ANAGRAFICA.Indirizzo, VERBALE.DataViolazione, VERBALE.Importo, VERBALE.DecurtamentoPunti
FROM VERBALE
JOIN ANAGRAFICA ON VERBALE.idAnagrafica = ANAGRAFICA.idAnagrafica
WHERE VERBALE.Importo > 400;

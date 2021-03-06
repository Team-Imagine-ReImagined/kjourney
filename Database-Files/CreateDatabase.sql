DROP SCHEMA IF EXISTS kJourneyDB;
CREATE SCHEMA kJourneyDB;
USE kJourneyDB;

DROP TABLE IF EXISTS training;
CREATE TABLE training (
    ID int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL,
    trainingType VARCHAR(200),
    trainingLink varchar(100) NOT NULL
);

DROP TABLE IF EXISTS competency;
CREATE TABLE competency (
    ID int PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS band;
CREATE TABLE band (
    ID int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    level int NOT NULL
);

DROP TABLE IF EXISTS responsibilities;
CREATE TABLE responsibilities (
    ID int PRIMARY KEY AUTO_INCREMENT,
    respDesc VARCHAR(200) NOT NULL
);

DROP TABLE IF EXISTS capLead;
CREATE TABLE capLead (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    photo VARCHAR(200) NOT NULL,
    message VARCHAR(100) NOT NULL
); 

DROP TABLE IF EXISTS capability;
CREATE TABLE capability (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    leadID INT NOT NULL,
    description VARCHAR(200),
    FOREIGN KEY (leadID) REFERENCES capLead(ID)
);

DROP TABLE IF EXISTS jobFam;
CREATE TABLE jobFam (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    capID INT NOT NULL,
    FOREIGN KEY (capID) REFERENCES capability(ID)
);

DROP TABLE IF EXISTS jobRole;
CREATE TABLE jobRole (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    summary VARCHAR(200) NOT NULL,
    link VARCHAR(100) NOT NULL,
    jobFamID INT NOT NULL,
    bandID INT NOT NULL,
    FOREIGN KEY (jobFamID) REFERENCES jobFam(ID),
    FOREIGN KEY (bandID) REFERENCES band(ID)
);

DROP TABLE IF EXISTS comp_Band;
CREATE TABLE comp_Band (
    compID int NOT NULL,
    bandID int NOT NULL,
    compDesc varchar(200) NOT NULL,

    FOREIGN KEY (compID) REFERENCES competency(ID),
    FOREIGN KEY (bandID) REFERENCES band(ID)
);

DROP TABLE IF EXISTS band_Training;
CREATE TABLE band_Training (
    bandID int NOT NULL,
    trainingID int NOT NULL,
    PRIMARY KEY(bandID, trainingID),

    FOREIGN KEY (bandID) REFERENCES band(ID),
    FOREIGN KEY (trainingID) REFERENCES training(ID)
);

DROP TABLE IF EXISTS userData;
CREATE TABLE userData (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    roleID INT NOT NULL,
    photo VARCHAR(200) NOT NULL DEFAULT '../../assets/userImages/james.JPG',
    FOREIGN KEY (roleID) REFERENCES jobRole(ID)
);

DROP TABLE IF EXISTS resp_Band;
CREATE TABLE resp_Band (
    respID int NOT NULL,
    bandID int NOT NULL,
    PRIMARY KEY(respID, bandID),

    FOREIGN KEY (respID) REFERENCES responsibilities(ID),
    FOREIGN KEY (bandID) REFERENCES band(ID)
);

DROP TABLE IF EXISTS resp_Role;
CREATE TABLE resp_Role (
    respID int NOT NULL,
    roleID int NOT NULL,
    PRIMARY KEY(respID, roleID),

    FOREIGN KEY (respID) REFERENCES responsibilities(ID),
    FOREIGN KEY (roleID) REFERENCES jobRole(ID)
);

DROP TABLE IF EXISTS authData;
CREATE TABLE authData (
    localID INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    passwordHash VARCHAR(60) NOT NULL,
    failedAttempts INT NOT NULL DEFAULT 0,
    lockedOut BOOL NOT NULL DEFAULT FALSE,
    lockoutDate VARCHAR(30) DEFAULT NULL,
    jwt VARCHAR(200),
    jwtDate VARCHAR(30) DEFAULT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT 0,
    IDFromUserDataTable INT,

    FOREIGN KEY (IDFromUserDataTable) REFERENCES userData(ID)
);

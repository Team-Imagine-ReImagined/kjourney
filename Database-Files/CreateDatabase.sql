CREATE TABLE training (
    ID int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(200)
);

CREATE TABLE competency (
    ID int PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL
);

CREATE TABLE band (
    ID int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    level int NOT NULL
);

CREATE TABLE responsibilities (
    ID int PRIMARY KEY AUTO_INCREMENT,
    desc VARCHAR(50) NOT NULL
);

CREATE TABLE capLead(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    photo VARCHAR(200) NOT NULL,
    message VARCHAR(100) NOT NULL
); 

CREATE TABLE authData (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    passwordHash VARCHAR(50) NOT NULL,
    salt VARCHAR(50) NOT NULL,
    failedAttempts INT NOT NULL,
    lockedOut BOOL NOT NULL,
    lockoutDate DATETIME NOT NULL,
    jwt VARCHAR(50) NOT NULL,
    jwtDate DATETIME NOT NULL
);

CREATE TABLE capability(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    leadID INT NOT NULL,
    FOREIGN KEY (leadID) REFERENCES capLead(ID)
);

CREATE TABLE jobFam(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    capID INT NOT NULL,
    FOREIGN KEY (capID) REFERENCES capability(ID)
);

CREATE TABLE comp-Band (
    compID int NOT NULL,
    bandID int NOT NULL,
    desc varchar(50),
    PRIMARY KEY(compID, bandID),

    FOREIGN KEY (compID) REFERENCES competency(ID),
    FOREIGN KEY (bandID) REFERENCES band(ID)
);

CREATE TABLE band-Training (
    bandID int NOT NULL,
    trainingID int NOT NULL,
    PRIMARY KEY(compID, bandID),

    FOREIGN KEY (bandID) REFERENCES band(ID),
    FOREIGN KEY (trainingID) REFERENCES training(ID)
);

CREATE TABLE userData (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    roleID INT NOT NULL,
    FOREIGN KEY (roleID) REFERENCES role(ID)
);

CREATE TABLE jobRole (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    summary VARCHAR(150) NOT NULL,
    link VARCHAR(25) NOT NULL,
    jobFamID INT NOT NULL,
    bandID INT NOT NULL,
    FOREIGN KEY (jobFamID) REFERENCES jobFam(ID),
    FOREIGN KEY (bandID) REFERENCES band(ID)
);

CREATE TABLE resp-Role (
    respID int NOT NULL,
    roleID int NOT NULL,
    PRIMARY KEY(respID, roleID),

    FOREIGN KEY (respID) REFERENCES responsibilities(ID),
    FOREIGN KEY (roleID) REFERENCES role(ID)
)

CREATE TABLE resp-Band (
    respID int NOT NULL,
    bandID int NOT NULL,
    PRIMARY KEY(respID, roleID),

    FOREIGN KEY (respID) REFERENCES responsibilities(ID),
    FOREIGN KEY (bandID) REFERENCES band(ID)
)

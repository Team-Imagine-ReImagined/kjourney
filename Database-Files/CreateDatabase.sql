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

CREATE TABLE caplead(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    photo VARCHAR(200) NOT NULL,
    message VARCHAR(100) NOT NULL
); 

CREATE TABLE authdata (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    passwordhash VARCHAR(50) NOT NULL,
    salt VARCHAR(50) NOT NULL,
    failedattempts INT NOT NULL,
    lockedout BOOL NOT NULL,
    lockoutdate DATETIME NOT NULL,
    jwt VARCHAR(50) NOT NULL,
    jwtdate DATETIME NOT NULL
);

CREATE TABLE capability(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    leadID INT NOT NULL,
    FOREIGN KEY (leadID) REFERENCES caplead(ID)
);

CREATE TABLE jobfam(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    capID INT NOT NULL,
    FOREIGN KEY (capID) REFERENCES capability(ID)
);

CREATE TABLE comp-band (
    compID int NOT NULL,
    bandID int NOT NULL,
    desc varchar(50),
    PRIMARY KEY(compID, bandID),

    FOREIGN KEY (compID) REFERENCES competency(ID),
    FOREIGN KEY (bandID) REFERENCES band(ID)
);

CREATE TABLE band-training (
    bandID int NOT NULL,
    trainingID int NOT NULL,
    PRIMARY KEY(compID, bandID),

    FOREIGN KEY (bandID) REFERENCES band(ID),
    FOREIGN KEY (trainingID) REFERENCES training(ID)
);

CREATE TABLE userdata (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    roleID INT NOT NULL,
    FOREIGN KEY (roleID) REFERENCES role(ID)
);

CREATE TABLE jobrole (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    summary VARCHAR(150) NOT NULL,
    link VARCHAR(25) NOT NULL,
    jobfamID INT NOT NULL,
    bandID INT NOT NULL,
    FOREIGN KEY (jobfamID) REFERENCES jobfam(ID),
    FOREIGN KEY (bandID) REFERENCES band(ID)
);

CREATE TABLE resp-role (
    respID int NOT NULL,
    roleID int NOT NULL,
    PRIMARY KEY(respID, roleID),

    FOREIGN KEY (respID) REFERENCES responsibilities(ID),
    FOREIGN KEY (roleID) REFERENCES role(ID)
)

CREATE TABLE resp-band (
    respID int NOT NULL,
    bandID int NOT NULL,
    PRIMARY KEY(respID, roleID),

    FOREIGN KEY (respID) REFERENCES responsibilities(ID),
    FOREIGN KEY (bandID) REFERENCES band(ID)
)
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(2) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(40),
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
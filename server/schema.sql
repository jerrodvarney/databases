CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  username VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT NOT NULL,
  roomname VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT NOT NULL,
  text VARCHAR(300),
  users_id INT,
  rooms_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (users_id) REFERENCES users(id),
  FOREIGN KEY (rooms_id) REFERENCES rooms(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


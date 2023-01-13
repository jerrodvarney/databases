CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  username VARCHAR(50)
  -- PRIMARY KEY (username)
);

CREATE TABLE rooms (
  roomname VARCHAR(50)
  -- PRIMARY KEY (roomname)
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT NOT NULL,
  username VARCHAR(50),
  text VARCHAR(300),
  roomname VARCHAR(50),
  PRIMARY KEY (id)
  -- FOREIGN KEY (username) REFERENCES users(username),
  -- FOREIGN KEY (roomname) REFERENCES rooms(roomname)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


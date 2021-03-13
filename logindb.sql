Create Database login;
Use login;
CREATE TABLE admin_login(
 id INT NOT NUll AUTO_INCREMENT,
 name varchar(255) NOT NULL,
 password varchar(255) NOT NULL,
 primary key(id)
);

insert into admin_login(
name,
password
)
values('Rishi Dixit','pass1'),('Atul Gadhari','pass2'),('Tejas Adsare','pass3'),('Prashil Ganvar','pass4');
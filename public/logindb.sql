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




create database register;
use register;
create table user_register(
id int not null auto_increment,
name varchar(255) not null,
email varchar(255) not null,
password varchar(255) not null,
repassword varchar(255) not null,
primary key(id)
);


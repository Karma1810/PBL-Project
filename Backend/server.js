const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

dotenv.config({
    path: "./auth.env"
})

const app = express();

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname,'../public');
app.use(express.static(publicDirectory));


<<<<<<< HEAD
app.use(express.static('../images'));
=======
>>>>>>> 3a627fbf92779df5cf5252c169094e2ad4fe714c

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use(cookieParser());

app.set('view engine', 'hbs');

db.connect((error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("Mysql connected")
    }
})

app.use('/', require('./routes/user'));

app.use('/auth' , require('./routes/auth'))


app.listen(5000,() => {
    console.log("server started on port http://localhost:5000");
});

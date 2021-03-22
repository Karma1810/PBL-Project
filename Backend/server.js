const express = require('express');
const app = express();
const path= require('path');
const mysql=require('mysql');




const port = process.env.PORT||5000;

app.use('/',require('./routes/user.js'));
app.use('/auth',require('./routes/auth.js'));


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

const publicDirectory= path.join(__dirname,'../public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine','hbs');


const {createConnection} =require('mysql')
const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Durban@28',
  database: 'login',

})

 db.connect((error)=>{
    if(error){
        console.log("error")
    }
    else console.log("Database connected")
 })
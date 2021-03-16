const express = require('express');
const app = express();
const path= require('path');
const cors = require('cors');


app.use(express.json());
app.use(cors(
    {
        origin: "*", // allow the server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
     credentials: true // allow session cookie from browser to pass through
}
));

const port = 5000;

app.use('/',require('./routes/user.js'));
app.use('/auth',require('./routes/auth.js'));


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

const publicDirectory= path.join(__dirname,'../public');
app.use(express.static(publicDirectory));

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
   
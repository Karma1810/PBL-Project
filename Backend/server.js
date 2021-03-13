const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/user');

app.use(express.json());
app.use(cors(
    {
        origin: "*", // allow the server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
     credentials: true // allow session cookie from browser to pass through
}
));

const port = 5000;

//app.use('/user', userRouter);

//app.get('/', (req, res) => {
    //res.status(200).json("Hello World");
//})

//app.listen(port, () => {
   // console.log(`Listening on port ${port}`)
//})n
const {createConnection} =require('mysql')

const connect = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Durban@28',
  database: 'login',

})

connect.query('select * from admin_login', function(err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})

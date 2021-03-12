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

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.status(200).json("Hello World");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
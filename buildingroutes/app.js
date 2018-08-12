const express = require('express');

const app = express();

const middlewareLogged = (req, res, next) => {
    console.log('Middleware logged.');
    next();
}

let counter =  0;
const printCounter = (req, res, next) => {
    console.log(`HTTP Method: ${req.method} `);
    counter++;
    console.log(`Counter value: ${counter}`);
    next();
}

app.use(middlewareLogged);
app.use(printCounter);

app.get('/', (req, res) => {
    const httpMethod = req.method;
    res.send(`Got a ${httpMethod} request.`);
});

app.get('/about', (req, res) => {
    res.send('Hello and welcome to the About Page');
});

app.get('/help', (req, res) => {
    res.send('Welcome to the Help Page');
});


app.post('/', (req, res) => {
    const httpMethod = req.method;
    res.send(`Got a ${httpMethod} request.`);
});

app.put('/putrequest', (req, res) => {
    const httpMethod = req.method;
    res.send(`Got a ${httpMethod} request.`);
});

app.delete('/deleterequest', (req, res) => {
    const httpMethod = req.method;
    res.send(`Got a ${httpMethod} request.`);
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
});
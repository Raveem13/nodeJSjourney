const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/public/css'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000.');
});
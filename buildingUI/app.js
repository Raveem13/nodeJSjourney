const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs');
});

app.get('/:username', (req, res) => {
    const username = req.params.username;
    res.render('username.hbs', {
        // username: username
        username  //bcz in ES6 { username: username } is same as { username }
    });
});

app.get('/:username/:city/:state', (req, res) => {
    const username = req.params.username;
    const city = req.params.city;
    const state = req.params.state;

    res.render('info.hbs', {
        username,
        city,
        state,
        date : new Date()
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
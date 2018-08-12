const express = require('express');
const hbs = require('hbs');
const path = require('path');

const {mongoose} = require('./db/mongoose');
const {routes} = require('./routes/index');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');  // setting view engine as hbs
app.set('views', path.join(__dirname, '/api/views'));  // to tell program where to look for view files
// console.log(path.join(__dirname, '/api/views'));       // when we throw to server dir name won't be the same as local path(machine)

hbs.registerHelper('formatDate', (date) => {
    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
});

// app.use(routes);
routes(app);


app.listen(port, () => {
    console.log(`Listening on Port: ${port}...`);
});

module.exports = {app};
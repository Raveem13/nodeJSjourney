const bodyParser = require('body-parser');

const {mongoose} = require('./../db/mongoose');
const {Tickets} = require('./../api/models/ticket');

const  post = require('./post');
const  get = require('./get');


const routes = (app) => {

    app.use(bodyParser.urlencoded({ extended: true })); //

    app.post('/', post.saveData);

    app.get('/display', get.showAll);

}

module.exports = {routes};
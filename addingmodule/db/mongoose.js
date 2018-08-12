const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/LearnToProgram';

mongoose.connect(url, {}).then(() => {
    console.log('Connected to LearnToProgram collection')
}, (err) => {
    console.log(err);
});

module.exports = {mongoose};
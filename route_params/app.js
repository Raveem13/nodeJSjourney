const express = require('express');

const app = express();

app.get('/:username', (req, res) => {
    res.send(req.params);
    const username = req.params.username;
    console.log(username);
});

//    /ravimkg/city/bengaluru/state/karnataka   

app.get('/:username/city/:city/state/:state', (req, res) => {
    res.send(req.params);
});

app.get('/:username/:city/:state', (req, res) => {
    res.send(req.params);
});

app.listen(3000, () =>{
    console.log('Listening on port 3000');
});
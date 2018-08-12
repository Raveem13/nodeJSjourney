const http = require('http');
const url = require('url');

const address = 'http://localhost:3000/node?chapter=2&module=url&module=http';

const urlParams = url.parse(address, true);

http.createServer((req, res) => {
    res.write(`URL host:${urlParams.host}\n`);
    res.write(`URL pathname:${urlParams.pathname}\n`);

    for(let property in urlParams.query){
        let value = urlParams.query[property];
        res.write(`${property} : ${value}\n`);
    }
    
    res.end();
}).listen(3000);
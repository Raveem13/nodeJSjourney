const http = require('http');
const htmlCode = require('./../htmlCode.js');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(htmlCode.gethtml());
    res.end();
}).listen(3000);

module.exports = {http};
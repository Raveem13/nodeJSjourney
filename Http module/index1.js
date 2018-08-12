const http = require('http');   

http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/html   '});
    res.write('<h1>Works on localhost:3000</h1>');
    res.write('<p>This is a paragraph</p>'); 
    res.end();
}).listen(3000); 
// 200 
// 3000 is port number
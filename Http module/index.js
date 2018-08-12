const http = require('http');   

http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
}).listen(3000); 
// 200 
// 3000 is port number
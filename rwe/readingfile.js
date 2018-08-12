const fs = require('fs');

fs.readFile('./helloworld.txt', 'utf8', (err,data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
        console.log('1 executed');
    }
});

const data = fs.readFileSync('./nodejs.txt', 'utf8');
console.log(data);
console.log('2 executed');
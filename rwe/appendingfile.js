const fs = require('fs');

// fs.appendFile('./helloworld.txt', ' appending data to this file.', (err) => {
//     if(err){
//         console.log(err);
//     }
// });

fs.appendFileSync('./nodejs.txt', '\nappending data to nodejs using appendFileSync');

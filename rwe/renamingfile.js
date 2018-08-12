const fs = require('fs');

// fs.rename('helloworld.txt','hellonodejs.txt', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('File name has been changed!');
//     }
// });

fs.renameSync('nodejs.txt','helloworldnodejs.txt');
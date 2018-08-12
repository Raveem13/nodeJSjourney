const fs = require('fs');

// fs.writeFile('helloworld.txt','Hello world JS! overwritten', (error) =>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log('helloworld.txt file was saved!')
//     }
// });

fs.writeFileSync('nodejs.txt','This file was created with writefilesync');
const yargs = require('yargs');

const argv = yargs.argv;
// console.log(argv);
// console.log(process.argv);  // $node index.js

// console.log(argv._);
// console.log(process.argv[2]); // $node index.js command

// console.log(argv.argument);  // node index.js command --argument="testing"

// console.log(argv);
// console.log(argv.add);  // node index.js add --add=5 --add=8 --add=10 --add=100

console.log(argv.foo); //node index.js --foo.bar="bar" --foo.foo="foo"
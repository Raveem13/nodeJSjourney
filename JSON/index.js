const info = require('./info');

// console.log(info);
// console.log(info.name);
// console.log(info.city);
// console.log(info.name.firstname);

// console.log(info['state']);
// console.log(info['name']);


// info.name.firstname = 'Shravan';
// info.name.lastname = 'KG';
// console.log(info);


// info.age = '23';
// console.log(info);



// const stringObject = JSON.stringify(info);
// console.log(stringObject);
// console.log(typeof stringObject);

// const jsonObject = JSON.parse(stringObject);
// console.log(jsonObject);
// console.log(typeof jsonObject);


delete info.job;
console.log(info);
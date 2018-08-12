const yargs = require('yargs');

const data = require('./data');
const argv = yargs.argv;
const command = argv._[0]
// console.log(command);

const findIndex = (data, item) => {
    let index = -1;
    for (i=0; i<data.length; i++) {
        if (data[i][item] !== undefined) {
            index = i;
        }
    }   
    return index;
}

const creatObj = (name,details) => {
    const obj = `{"${name}":"${details}"}`;
    const item = JSON.parse(obj);
    return item;
}
if (command === 'view') {
    // console.log(data);
} else if (command === 'add') {
    const name = argv.name;
    const details = argv.details;

    const newItem = creatObj(name, details);
    data.push(newItem);
    console.log(data);

} else if (command === 'delete') {
    const deleteItem = argv.deleteItem;
    // console.log(deleteItem);
    const index = findIndex(data, deleteItem);
    if (index !== -1){
        data.splice(index, 1);
    }
    console.log(data);
} else if (command === 'edit') {
    const editItem = argv.editItem;
    const name = argv.name;
    const details = argv.details;

    const index = findIndex(data, editItem);

    if (index !== -1){
        const newItem = creatObj(name, details);
        data[index] = newItem;
    } else {
        console.log('Item is not found');
    }
    console.log(data);
} else {
    console.log('Please use a Valid command.');
}


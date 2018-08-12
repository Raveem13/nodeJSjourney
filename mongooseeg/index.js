const mongoose = require('mongoose');
const mongooseSave = require('./db/mongooseSave');
const mongooseFind = require('./db/mongooseFind');
const mongooseDelete = require('./db/mongooseDelete');
const mongooseUpdate = require('./db/mongooseUpdate');

// const {ShoppingList} = require('./models/shoppingList');
const ShoppingList = require('./models/shoppingList');

const url = 'mongodb://localhost:27017/LearnToProgram';

mongoose.connect(url, {}).then(
    () => {
        console.log('Connected to LearnToProgram collection');
    }, (err) => {
        console.log(err);
    }
);


// const listItem = new ShoppingList({
//     item : 'grapes',
//     quantity : 25
// });

// const listItem2 = new ShoppingList({
//     item : 'cherries',
//     quantity : 20
// });

// console.log(listItem);
// console.log(listItem.item);
// console.log(listItem.quantity);
// console.log(listItem.date);
// console.log(listItem._id);


// Inseting Documents : 2 ways
// 1st way starts here
// listItem.save((err, doc) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(doc);
// });
// 1st way ends here


// 2nd way starts here (most likely using promise)
// listItem.save().then((doc) => {
//     console.log(doc);
// }, (err) => {
//     console.log(err);
// });

// 2nd way ends here

// mongooseSave.saveItem(listItem); // saveItem function is defined in mongooseSave.js file
// mongooseSave.saveItem(listItem2);

// mongooseFind.findAll();
// mongooseFind.findItem('cherry');
// mongooseFind.findById('5b673cfa684a8b0520439faf');

// mongooseDelete.deleteMany('apples');
// mongooseDelete.deleteOne(20);
// mongooseDelete.findOneAndRemove('5b683cacb481da25586b8006');


// const obj = {
//     item : 'apples',
//     quantity : 15
// }
// mongooseUpdate.updateSet('Steak', 10, obj);

// const obj = {
//     quantity : ""
// }
// mongooseUpdate.updateUnset('apples', obj);

const incobj = {
    quantity : +2
}
mongooseUpdate.updateInc('grapes', incobj);
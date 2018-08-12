const ShoppingList = require('./../models/shoppingList');

const deleteMany = (item) => {
    ShoppingList.deleteMany({
        item
    }).then((results) => {
        console.log(results)
    }, (err) => {
        console.log(err);
    })
};

const deleteOne = (quantity) => {
    ShoppingList.deleteOne({
        quantity
    }).then((results) => {
        console.log(results)
    }, (err) => {
        console.log(err);
    })
};

const findOneAndRemove = (_id) => {
    ShoppingList.findOneAndRemove({
        _id
    }).then((results) => {
        console.log(results)
    }, (err) => {
        console.log(err);
    })
};

module.exports = {
    deleteMany,
    deleteOne,
    findOneAndRemove
};
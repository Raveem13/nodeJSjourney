const {URL} = require('url');
const {parse} = require('url');

const myUrl = new URL('https://marketplace.visualstudio.com/search?target=VSCode&category=All%20categories&sortBy=Downloads');

const parseUrl = parse(myUrl.href, true);
const data = parseUrl.query;

// console.log(data); 

module.exports = {data};
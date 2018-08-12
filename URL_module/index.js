const {URL} = require('url');

const myurl = new URL('https://www.youtube.com/feed/trending');

// console.log(myurl);
// console.log(myurl.host);


const {parse} = require('url');
const parseUrl = parse(myurl.href, true);

console.log(parseUrl);
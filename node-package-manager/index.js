const _ = require("lodash");

// memisahkan bilangan ganjil dan genap menggunakan lodash
const myOddEveryArray = _.partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (n) => n % 2);
console.log(myOddEveryArray);

/**
 * node ./node-package-manager/index.js
 * 
 * output
 * [ [ 1, 3, 5, 7, 9 ], [ 2, 4, 6, 8, 10 ] ]
 */